import { configureStore } from "@reduxjs/toolkit";
import chat from "./chat";

export default configureStore({
  reducer: {
    chat,
  },
});
