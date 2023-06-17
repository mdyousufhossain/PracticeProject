import { typeGraphy, Bottom } from "./TaskDisplay";
import { useState } from "react";

import axios from "axios";

const TaskMaker = ({ task, index, deleteTask, tasksid, editingTask }) => {
  const [packed, setPacked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setnewData] = useState({});

  let taskContent;
  let taskInput;
  

  packed
    ? (taskContent = (
        <del>
          <li
            className={`${typeGraphy} p-4 m-2 bg-slate-900 text-center text-slate-50 rounded text-2xl`}
          >
            {index}.{task.name} ✅
          </li>
        </del>
      ))
    : (taskContent = (
        <li
          className={`${typeGraphy} p-4 m-2 bg-slate-900 text-center text-slate-50 rounded text-2xl`}
        >
          {" "}
          {index}.{task.name}{" "}
        </li>
      ));

  const HandleClick = () => {
    if (!packed) {
      return setPacked(true);
    }
    return setPacked(false);
  };

  const handleupdate = () => {
    if (!isEditing) {
      setIsEditing(true);
      setnewData(task)
    }
  };

  isEditing
    ? (taskInput = (
        <>
          <input
            type="text"
            value={newData.name}
            onChange= { 
              (e) => {
                setnewData(e.target.value)
              }
            }
          />
          <button
            className={Bottom}
            onClick={() => {
              editingTask(task._id,newData);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ))
    : (taskInput = (
        <>
          <button
            className={Bottom}
            onClick={handleupdate}
          >
            Edit
          </button>
        </>
      ));

  

  return (
    <div className="flex justify-between m-4 bg-slate-700 rounded">
      {taskContent}

      <div className="mx-4 flex justify-center items-center">
        {taskInput}
        <button className={Bottom} onClick={() => deleteTask(tasksid)}>
          Delete
        </button>
        <button className={Bottom} onClick={HandleClick}>
          Done
        </button>
      </div>
    </div>
  );
};

export default TaskMaker;
