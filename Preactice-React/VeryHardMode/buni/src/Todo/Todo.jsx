import { useEffect, useState } from "react";
import List from "../listFormating/List";

function ToDo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  console.log(list);
  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((error) => console.error(error));
  }, []);

  const handleChangeInput = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = async () => {
    
    const newTask = { text: task }; // Create an object with the text property
    fetch("http://localhost:8000/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask), // Stringify the newTask object
    })
      .then((res) => res.json())
      .then((data) => {
        setList([...list, data]); // Add the returned data to the list
        setTask(""); // Clear the input field
      })
      .catch((err) => console.error(err));
  };

  const handleDeleteTask = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode == 13) {
      return handleAddTask();
    }
  };

  return (
    <>
      <label>Add your Task</label>
      <input
        type="text"
        value={task}
        onChange={handleChangeInput}
        onKeyUp={enterKeyPressed}
      />

      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {list &&
          list.map((text, index) => (
            <li key={index}>
              {text.text}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ToDo;
