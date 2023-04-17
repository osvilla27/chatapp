import { configureStore } from "@reduxjs/toolkit";
import messageSlices from "./slices/messageSlices";

export default configureStore({
  reducer: {
    message: messageSlices,
  },
});


