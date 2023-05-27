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

  console.log("task", task)
  console.log("list", list)

  return (
    <>
      <label>Add your Task</label>
      <input type="text" value={task}  onChange={handleChangeInput} />

      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {list &&
          list.map((heda, index) => (
            <li key={index}>
              <List Message={heda} amount={index} />
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default ToDo;
