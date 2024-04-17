import { configureStore } from "@reduxjs/toolkit";
import tarjetonParamsReducer from "../slices/tarjetonParamsSlice";

export default configureStore({
  reducer: {
    tarjetonParams: tarjetonParamsReducer 
  },
});
