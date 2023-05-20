import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./reducers/companyReducer";

export const store = configureStore({
  reducer: {
    company: companyReducer
  },
});
