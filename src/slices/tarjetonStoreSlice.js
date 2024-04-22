import { createSlice } from "@reduxjs/toolkit";

export const tarjetonStoreSlice = createSlice({
  name: "tarjetonStoreSlice",
  initialState: {
    store: [],
  },
  reducers: {
    add: (state, action) => {
      state.store.push({
        name: action.payload.name,
        tarjeton: action.payload.tarjeton,
      });
    },
  },
});

export const { add } = tarjetonStoreSlice.actions;
export default tarjetonStoreSlice.reducer;
