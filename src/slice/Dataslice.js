import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const Userslice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setdata: (state, action) => {
      state.users = action.payload;
    },
    removedata: (state, action) => {
      state.users = state.users.filter((item) => item.uid !== action.payload);
    },
    datefilterdata: (state, action) => {
      const { startstamp, endstamp } = action.payload;
      state.users = state.users.filter(
        (user) => user.join_date >= startstamp && user.join_date <= endstamp
      );
     
    },
  },
});

export const { setdata, removedata, datefilterdata } = Userslice.actions;

export default Userslice.reducer;
