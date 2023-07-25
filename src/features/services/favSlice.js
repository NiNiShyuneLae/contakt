import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    fav: [],
  },
  reducers: {
    addToFav: (state, { payload }) => {
      const isAlreadyFav = state.fav.some((item) => item.id === payload.id);
      if (!isAlreadyFav) {
        state.fav = [...state.fav, payload];
        Cookies.set("fav", JSON.stringify(state.fav));
      }
    },
    removeFromFav: (state, { payload }) => {
      state.fav = state.fav.filter((item) => item.id !== payload);
      Cookies.set("fav", JSON.stringify(state.fav));
    },
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;
