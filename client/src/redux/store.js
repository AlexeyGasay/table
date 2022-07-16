import { configureStore } from '@reduxjs/toolkit';
import tableDataSlice from "./tableDataSlice"

export const store = configureStore({
  reducer: {
    table: tableDataSlice,
  },
});
