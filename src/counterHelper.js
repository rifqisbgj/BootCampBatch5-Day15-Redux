import { createSlice } from "@reduxjs/toolkit";

// createSlice() digunakan untuk membuat reducer
export const counter = createSlice({
  // mengatur alias reducer
  name: "counter",
  // memberikan nilai awal yang berada pada reducer
  initialState: {
    nilai: 0,
  },
  // digunakan untuk memberikan aksi yang terdapat pada reducer
  reducers: {
    // memberikan aksi tambah dan kurang
    tambah: (state) => {
      state.nilai += 1;
    },
    kurang: (state) => {
      state.nilai -= 1;
    },
  },
});

// export aksi tambah dan kurang
export const { tambah, kurang } = counter.actions;
// export reducer
export default counter.reducer;
