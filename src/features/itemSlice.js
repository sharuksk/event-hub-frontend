import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { setitem, addItem, clearItems } = itemSlice.actions;
export default itemSlice.reducer;
