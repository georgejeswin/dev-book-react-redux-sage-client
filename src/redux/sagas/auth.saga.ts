import { takeEvery } from "redux-saga/effects";
import authSlice from "../slices/auth.slice";

function* login(action: PayloadAction<{ username: string; password: string }>) {
  const { password, username } = action.payload;
  try {
    const response: ResponseGenerator = yield Api.auth.logIn({
      username,
      password,
    });
    toast.dismiss();
    storageEngine.set("jwt", response.data.tokenData.token);
    const user = jwtDecode(response.data.tokenData.token);
    yield put(authSlice.actions.setAuthenticatedUser(user));
  } catch (err) {
    toast.dismiss();
    toast.error("Login Unsuccessful");
    console.log(err);
  }
}

function* authSaga() {
  yield takeEvery(authSlice.actions.login.type, login);
}
