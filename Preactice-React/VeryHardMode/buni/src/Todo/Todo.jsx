import { useState } from "react";
import List from "../listFormating/List";

function ToDo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleChangeInput = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask(" ");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTask = [...list];
    updatedTask.splice(index, 1);
    setList(updatedTask);
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
              <List Message={text} amount={index} />
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ToDo;
