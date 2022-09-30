import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import { ResponseGenerator } from "../../interfaces/Response";
import { User } from "../../interfaces/users";
import Api from "../../services/api";
import usersSlice from "../slices/users.slice";

function* getAllUsers(action: PayloadAction<User[]>) {
  const response: ResponseGenerator = yield Api.users.getAllUsers();
  yield put(usersSlice.actions.setAllUsers(response.data));
}

function* usersSaga() {
  yield takeEvery(usersSlice.actions.getAllUsers.type, getAllUsers);
}

export default usersSaga;
