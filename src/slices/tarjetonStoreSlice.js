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
    deleteFileFromStore: (state, action) => {
      state.store = state.store.filter(
        (file) => file.name !== action.payload.file,
      );
    },
    deleteAll: (state) => {
      state.store = [];
    },
  },
});

export const { add, deleteFileFromStore, deleteAll } =
  tarjetonStoreSlice.actions;
export default tarjetonStoreSlice.reducer;
