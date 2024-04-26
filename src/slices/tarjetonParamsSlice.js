import { createSlice } from "@reduxjs/toolkit";

let params = localStorage.getItem("params") ?? undefined;
let tarjetonType = localStorage.getItem("tarjetonType");

export const tarjetonParamsSlice = createSlice({
  name: "tarjetonParams",
  initialState: {
    tarjetonType: tarjetonType ?? "",
    params: params ? JSON.parse(params) : {},
  },
  reducers: {
    update: (state, action) => {
      state.tarjetonType = action.payload.tarjetonType;
      state.params = action.payload.params;

      localStorage.setItem("tarjetonType", action.payload.tarjetonType);
      localStorage.setItem("params", JSON.stringify(action.payload.params));
    },
  },
});

export const { update, updateTarjetonType } = tarjetonParamsSlice.actions;
export default tarjetonParamsSlice.reducer;
