import { signupParams } from "../../../interfaces/auth";
import { ResponseGenerator } from "../../../interfaces/Response";
import request from "../../request";

function* login(params: { username: string; password: string }) {
  const response: ResponseGenerator = yield request.post(
    `${process.env.REACT_APP_ENTRYPOINT}auth/login`,
    params
  );
  return response;
}

function* signup(params: signupParams) {
  const response: ResponseGenerator = yield request.post(
    `${process.env.REACT_APP_ENTRYPOINT}auth/signup`,
    params
  );
  return response;
}

const auth = {
  login,
  signup,
};

export default auth;
