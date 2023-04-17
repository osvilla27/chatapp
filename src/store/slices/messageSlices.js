import { createSlice } from "@reduxjs/toolkit";
import { fetchTextMessage } from "../thunk/fetchMessage";

const initialState = {
  isLoding: false,
  status: "",
  error: null,
};

const messageSlices = createSlice({
  name: "message",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTextMessage.pending, (state) => {
      state.isLoding = true;
    });
    builder.addCase(fetchTextMessage.fulfilled, (state, action) => {
      state.status = action.payload;
      state.isLoding = false;
    });
    builder.addCase(fetchTextMessage.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoding = false;
    });
  },
});

export default messageSlices.reducer;