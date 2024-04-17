import { createSlice } from "@reduxjs/toolkit";

export const tarjetonParamsSlice = createSlice({
    name: "tarjetonParams",
    initialState: {
        tarjetonType: "",
        params: {}
    },
    reducers: {
        update: (state, action) => {
            state.tarjetonType = action.payload.tarjetonType;
            state.params = action.payload.params;
        },
    }
})

export const { update, updateTarjetonType } = tarjetonParamsSlice.actions;
export default tarjetonParamsSlice.reducer;