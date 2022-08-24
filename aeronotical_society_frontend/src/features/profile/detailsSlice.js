import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDetails = createAsyncThunk("member/details", async () => {
  const res = await fetch("http://localhost:8000/member/details", {
    credentials: "include",
  });

  if (res.ok) {
    const details = await res.json();
    return { details };
  }
});

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    user: {},
    details: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => {
      return action.payload.details;
    },
  },
});

export const { setUser } = detailsSlice.actions;
export default detailsSlice.reducer;
