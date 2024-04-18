import { createSlice } from "@reduxjs/toolkit";

export const tarjetonParamsSlice = createSlice({
    name: "tarjetonParams",
    initialState: {
        tarjetonType: localStorage.getItem("tarjetonType"),
        params: JSON.parse(localStorage.getItem("params")),
    },
    reducers: {
        update: (state, action) => {
            state.tarjetonType = action.payload.tarjetonType;
            state.params = action.payload.params;

            localStorage.setItem("tarjetonType", JSON.stringify(action.payload.tarjetonType));
            localStorage.setItem("params", JSON.stringify(action.payload.params));
        },
    }
})

export const { update, updateTarjetonType } = tarjetonParamsSlice.actions;
export default tarjetonParamsSlice.reducer;