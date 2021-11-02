import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appState: {
    modalOpen: true,
    online: false,
    theme: false,
  },
};

export const appStateSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppData: (state, action) => {
      state.appState = action.payload;
    },
  },
});

// Actions - used to set global state
export const { setAppData } = appStateSlice.actions;

// Selectors - used to fetch global state
export const selectAppData = (state) => state.app.appState;

export default appStateSlice.reducer;
