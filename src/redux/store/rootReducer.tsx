import { combineReducers } from "redux";

const initialState: RootState = {};

const appReducer = combineReducers({});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
export type RootState = ReturnType<typeof appReducer>;

export default rootReducer;
