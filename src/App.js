import React from "react";
import { useSelector, useDispatch } from "react-redux";
// memanggil aksi reducer tambah dan kurang
import { tambah, kurang, reset } from "./counterHelper";

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
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};

export default App;
