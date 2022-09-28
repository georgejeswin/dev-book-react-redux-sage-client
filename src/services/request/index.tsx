import axios from "axios";
import { ResponseGenerator } from "../../interfaces/Response";
import authSlice from "../../redux/slices/auth.slice";
import store from "../../redux/store/store";
import storageEngine from "../../utils/storageEngine";

const request = axios.create();

request.interceptors.request.use(async (config) => {
  try {
    const token = await storageEngine.get("jwt");
    config.headers = {
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
    console.log("response error: ", error);
    if (error.response.status === 401) {
      store.dispatch({
        type: authSlice.actions.clearAuthentication.type,
      });
    }
    storageEngine.clear();
    return Promise.reject(error);
  }
);

export default request;
