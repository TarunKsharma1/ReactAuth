import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAsync } from "../Structure";

export const login = createAsyncThunk("login", async (body: {}) => {
  return await fetchAsync({
    url: "/api/login",
    method: "post",
    body,
  });
});

export const signup = createAsyncThunk("signup", async (body: {}) => {
  return await fetchAsync({
    url: "/api/register",
    method: "post",
    body,
  });
});
