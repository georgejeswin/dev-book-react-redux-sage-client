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

export const signup = (
  state: InitialState,
  action: PayloadAction<{
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    callback: () => void;
  }>
) => state;

export const login = (
  state: InitialState,
  action: PayloadAction<{
    password: string;
    username: string;
    callback: () => void;
  }>
) => state;

export const setAuthenticatedUser = (
  state: InitialState,
  action: PayloadAction<any>
) => {
  state.user = action.payload;
  state.authenticated = true;
};

export const logout = (
  state: InitialState,
  action: PayloadAction<{ callback: () => void }>
) => {
  state.authenticated = false;
};

export const clearAuthentication = (
  state: InitialState,
  action: PayloadAction<void>
) => {
  state.authenticated = false;
  state.user = undefined;
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login,
    signup,
    setAuthenticatedUser,
    logout,
    clearAuthentication,
  },
});

export default authSlice;
