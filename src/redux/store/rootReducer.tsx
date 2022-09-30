import { combineReducers } from "redux";
import authSlice, { initialAuthState } from "../slices/auth.slice";
import postsSlice, { initialPostsState } from "../slices/posts.slice";
import usersSlice, { initialUsersState } from "../slices/users.slice";

const initialState: RootState = {
  auth: initialAuthState,
  posts: initialPostsState,
  users: initialUsersState,
};

const appReducer = combineReducers({
  auth: authSlice.reducer,
  posts: postsSlice.reducer,
  users: usersSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;

export default rootReducer;
