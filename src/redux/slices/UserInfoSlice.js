import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

export const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

// Actions - used to set global state
export const { setUserData } = userInfoSlice.actions;

// Selectors - used to fetch global state
export const selectUserData = (state) => state.user.userData;

export default userInfoSlice.reducer;
