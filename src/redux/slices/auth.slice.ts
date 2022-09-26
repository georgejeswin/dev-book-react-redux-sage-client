import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  authenticated: boolean;
  user:
    | {
        id: string;
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        role: string;
      }
    | undefined;
};

export const initialAuthState: InitialState = {
  user: undefined,
  authenticated: false,
};

export const login = (
  state: InitialState,
  action: PayloadAction<{ password: string; username: string }>
) => state;

export const setAuthenticatedUser = (
  state: InitialState,
  action: PayloadAction<any>
) => {
  state.user = action.payload;
  state.authenticated = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login,
    setAuthenticatedUser,
  },
});

export default authSlice;
