import { useState } from "react";
import List from "../listFormating/List";
let NextID = 0;

function AddingCart() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>Add Your Shopping List</h1>
      <label htmlFor="text">
        Your Word
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          setList([...list, { id: NextID++, text: text }]);
        }}
      >
        {" "}
        add to the list{" "}
      </button>
      <div>
        <ul>
          {list && list.map((item) => <List Message={item.text} key={item.id} />)}
        </ul>
      </div>
    </div>
  );
}
export default AddingCart;
