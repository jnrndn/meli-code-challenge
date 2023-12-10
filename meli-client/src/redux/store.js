import { configureStore } from "@reduxjs/toolkit";
import { itemApi } from "./services/itemApi";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [itemApi.reducerPath]: itemApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([itemApi.middleware]),
});

setupListeners(store.dispatch);
