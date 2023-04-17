import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTextMessage = createAsyncThunk("message/fetch", async (data) => {
  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
    body: data,
  };

  const response = await fetch(process.env.REACT_APP_WHATSAPP_PATH, params);

  const result = await response.json();

  if (response.status !== 200) throw result;

  return result;
});

export { fetchTextMessage };
