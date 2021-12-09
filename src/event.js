import React from "react";

function Event() {
  //Create function here
  function Greeting() {
    return alert('Hallo everyone have a nice day')
  }

  return (
    // Code Inside div
    <div>
      <p> If you press
        <b>Click Here</b> then alert will be open
      </p>
      {/* <button onClick={ alert("Hallo B29 Fullstack")} >Click Here</button> */}
      <button onClick={() => alert("Hallo B29 Fullstack")} >Click Here</button>

      <p> If you press
        <b>Greeting</b> then alert will be open
      </p>
      {/* <button onClick={Greeting()} >Click Here</button> */}
      <button onClick={Greeting} >Click Here</button>
    </div>
  );
}

export default Event;
