import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Display({ socket }) {
  let navigate = useNavigate();
  const [display, setDisplay] = useState("None");
  // const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    socket.on("display_btn", (data) => {
      setDisplay(data);
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="Display">
      <h1>Display</h1>

      <h4>{display}</h4>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Display;
