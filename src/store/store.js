import { configureStore } from "@reduxjs/toolkit";
import tarjetonParamsReducer from "../slices/tarjetonParamsSlice";
import tarjetonStoreReducer from "../slices/tarjetonStoreSlice";

export default configureStore({
  reducer: {
    tarjetonParams: tarjetonParamsReducer,
    tarjetonStore: tarjetonStoreReducer,
  },
});
