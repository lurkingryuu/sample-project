import React from "react";
import { useNavigate } from "react-router-dom";

function Click({socket}) {
  let navigate = useNavigate();

  function btn(n) {
    console.log("btn_clik emitted");
    socket.emit("btn_clik", n);
  }

  return (
    <div className="Click">
      <h1>Click one of the buttons</h1>
      <button
        onClick={() => {
          btn(1);
        }}
        >
        Button 1
      </button>
      <button
        onClick={() => {
          btn(2);
        }}
        >
        Button 2
      </button>
      <button
        onClick={() => {
          btn(3);
        }}
        >
        Button 3
      </button>
      <button
        onClick={() => {
          btn(4);
        }}
      >
        Button 4
      </button>
      <p></p>
      <button onClick={() => {
          navigate("/view");
        }}>View</button>
    </div>
  );
}

export default Click;
