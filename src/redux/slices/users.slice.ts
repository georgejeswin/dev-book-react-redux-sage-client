import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/users";

type InitialState = {
  users: User[];
};

export const initialUsersState: InitialState = {
  users: [],
};

export const getAllUsers = (state: InitialState) => state;

export const setAllUsers = (
  state: InitialState,
  action: PayloadAction<User[]>
) => {
  state.users = action.payload;
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    getAllUsers,
    setAllUsers,
  },
});

export default usersSlice;
