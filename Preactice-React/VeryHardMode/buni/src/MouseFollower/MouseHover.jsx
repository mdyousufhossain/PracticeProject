import { useState } from "react";

export default function MouseHover() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div>
      <div
        onPointerMove={(e) => {
            console.log(e.clientX , e.clientY)
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: "relative",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "50%",
            opacity: 0.1,
            blur:0.9,
            transform: `translate(${position.x}px, ${position.y}px)`,
            top: -220,
            left: -550,
            width: 400,
            height: 400,
          }}
        ></div>
      </div>
    </div>
  );
}
