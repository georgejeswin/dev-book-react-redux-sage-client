import { PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import { signupParams } from "../../interfaces/auth";
import { ResponseGenerator } from "../../interfaces/Response";
import Api from "../../services/api";
import storageEngine from "../../utils/storageEngine";
import authSlice from "../slices/auth.slice";

function* login(
  action: PayloadAction<{
    username: string;
    password: string;
    callback: () => void;
  }>
) {
  const { password, username, callback } = action.payload;
  try {
    const response: ResponseGenerator = yield Api.auth.login({
      username,
      password,
    });
    storageEngine.set("jwt", response?.data?.access_token);
    storageEngine.set("refresh", response?.data?.refresh_token);
    const user = jwtDecode(response?.data?.access_token);
    yield put(authSlice.actions.setAuthenticatedUser(user));
    callback();
  } catch (err) {
    toast.dismiss();
    toast.error("Login Unsuccessful");
    console.log("Login Failed", err);
  }
}

function* signup(action: PayloadAction<signupParams>) {
  try {
    const { username, firstName, lastName, password, email, callback } =
      action.payload;
    const response: ResponseGenerator = yield Api.auth.signup({
      username,
      firstName,
      lastName,
      password,
      email,
    });
    storageEngine.set("jwt", response.data.access_token);
    const user = jwtDecode(response.data.access_token);
    yield put(authSlice.actions.setAuthenticatedUser(user));
    callback!();
  } catch (error) {
    toast.error("Signup Unsuccessful");
    console.log("Signup failed", error);
  }
}

function* logout(action: PayloadAction<{ callback: () => void }>) {
  try {
    const { callback } = action.payload;
    storageEngine.clear();
    yield put(authSlice.actions.clearAuthentication());
    callback();
  } catch (error) {
    console.log("Logout Failed", error);
  }
}

function* authSaga() {
  yield takeEvery(authSlice.actions.login.type, login);
  yield takeEvery(authSlice.actions.signup.type, signup);
  yield takeEvery(authSlice.actions.logout.type, logout);
}

export default authSaga;
