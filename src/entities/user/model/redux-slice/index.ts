import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsersData } from "../../../../shared/api";
import { User } from "../../../../shared/types/index";
import { RootState } from "../../../../app/store";
import { normalizeUsersData } from "../../../../pages/users/lib";

export interface CounterState {
  users: Array<User> | null;
  isFetching: boolean;
}

const initialState: CounterState = {
  users: null,
  isFetching: false,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const users = await getUsersData();
  return normalizeUsersData(users);
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<User> | null>) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isFetching = false;
        state.users = action.payload;
      });
  },
});

export const { setUsers } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;
export const selectIsFetching = (state: RootState) => state.users.isFetching;

export default usersSlice.reducer;
