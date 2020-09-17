import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook/phonebookReducer";

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
  middleware: [...defaultMiddleware],
});

export default store;
