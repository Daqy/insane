import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "chat",
  initialState: {
    value: true,
  },
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { open, close, toggle } = counterSlice.actions;
export const useChat = (state) => state.chat.value;
export default counterSlice.reducer;
