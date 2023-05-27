import { useState } from "react";

export default function List({ amount, Message = "No message" }) {
  const [packed, setPacked] = useState(false);

  const HandleClick = () => {
    if(!packed){
     return setPacked(true)
    }
  return  setPacked(false)
  }

  if (packed) {
    return (
      <button onClick={HandleClick}>
        
        <li>
        #{amount} :<del> {Message}  ✅ </del>
        </li>

      </button>
    );
  }
  return (
    <button onClick={HandleClick}>
      <li>
      #{amount}:{Message}
      </li>
    </button>
  );
}
