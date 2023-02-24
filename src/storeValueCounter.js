import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterHelper";

/* 
untuk mengkonfigurasi store dengan counterReducer yang berisi data awal 
dan aksi yang diberikan
*/
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
