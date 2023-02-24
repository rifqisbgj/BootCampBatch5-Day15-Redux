import React from "react";
import { useSelector, useDispatch } from "react-redux";
// memanggil aksi reducer tambah dan kurang
import { tambah, kurang } from "./counterHelper";

const App = () => {
  // untuk mengakses redux store
  const count = useSelector((state) => state.counter.nilai);
  // untuk memberikan aksi pada reducer
  const dispatch = useDispatch();

  return (
    <>
      {count}
      <br></br>
      <button onClick={() => dispatch(tambah())}>Tambah</button>
      <button onClick={() => dispatch(kurang())}>Kurang</button>
    </>
  );
};

export default App;
