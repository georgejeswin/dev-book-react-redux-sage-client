import axios from "axios";
import { ResponseGenerator } from "../../interfaces/Response";
import storageEngine from "../../utils/storageEngine";
import mem from "mem";

const request = axios.create();

const refreshTokenFn = async () => {
  const refreshToken = storageEngine.get("refresh");
  try {
    const response: ResponseGenerator = await request.get(
      `${process.env.REACT_APP_ENTRYPOINT}auth/refresh`,
      {
        headers: {
          refresh_token: refreshToken!,
        },
      }
    );
    const { access_token, refresh_token } = response.data;
    if (!access_token) {
      storageEngine.unset("refresh");
      storageEngine.unset("jwt");
      window.location.href = "/login";
    }
    storageEngine.set("jwt", access_token);
    storageEngine.set("refresh", refresh_token);
    return { access_token, refresh_token };
  } catch (error) {
    storageEngine.unset("refresh");
    storageEngine.unset("jwt");
  }
};

const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});

request.interceptors.request.use(async (config) => {
  try {
    const token = await storageEngine.get("jwt");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  } catch (error) {
    console.log("request error: ", error);
  }
});

request.interceptors.response.use(
  (response: ResponseGenerator) => {
    return response;
  },
  async function (error) {
    const config = error?.config;
    if (error.response.status === 401 && !config?.sent) {
      config.sent = true;
      await memoizedRefreshToken();
      return request(config);
    } else {
      storageEngine.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default request;
