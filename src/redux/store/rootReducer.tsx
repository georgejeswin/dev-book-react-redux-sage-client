import { combineReducers } from "redux";
import authSlice, { initialAuthState } from "../slices/auth.slice";

const initialState: RootState = {
  auth: initialAuthState,
};

const appReducer = combineReducers({
  auth: authSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof appReducer>;

export default rootReducer;
