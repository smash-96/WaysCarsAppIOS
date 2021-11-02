import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/UserInfoSlice";
import appReducer from "../slices/AppStateSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: { ignoredPaths: ["some.nested.path"] },
  //     serializableCheck: { ignoredPaths: ["some.nested.path"] },
  //   }),
});
