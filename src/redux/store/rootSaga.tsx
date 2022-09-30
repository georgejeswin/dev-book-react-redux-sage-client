import { all } from "redux-saga/effects";
import authSaga from "../sagas/auth.saga";
import postsSaga from "../sagas/posts.saga";
import usersSaga from "../sagas/users.saga";

export default function* rootSaga() {
  yield all([authSaga(), postsSaga(), usersSaga()]);
}
