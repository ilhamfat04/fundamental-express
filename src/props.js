import React from "react";

//Import Components
import List from "./components/list";

function Props() {

  // tambahan
  const firstCarName = "BMW"
  const firstCarColor = "Red"
  const firstCarQty = 234
  return (
    // Code Inside div
    <div>
      <p>On the image element using default props, namely src</p>
      <img src="https://images.unsplash.com/photo-1638825794622-4c3bb400cdef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

      <List listData={firstCarName} color={firstCarColor} qty={firstCarQty} />
      <List listData="Mercedes Benz" />
      <List listData="Buggati" />
    </div>
  );
}

export default Props;
