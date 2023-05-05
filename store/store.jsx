import { configureStore } from "@reduxjs/toolkit";
import farmSliceReducer from "./barn";

export const store = configureStore({
  reducer: {
    farm: farmSliceReducer,
  },
});
