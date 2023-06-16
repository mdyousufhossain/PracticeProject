import { typeGraphy, Bottom } from "./TaskDisplay";
import { useState } from "react";

import axios from "axios";

const TaskMaker = ({ task, index, deleteTask, tasksid, editingTask }) => {
  const [packed, setPacked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { name } = task

  const editingTask = (task) => {

    if (isEditing) {
      const updatedTask = {
        ...name,
        name: e.target.value,
      };
  
      axios.put(`/api/tasks/${taskid}`, updatedTask)
        .then(response => {
          // Handle successful response if needed
          console.log("successfullyresponse",response)
          setIsEditing(false);
        })
        .catch(error => {
          console.log(error)
        });
    }
  };


  const taskContent = (
    <>
      <input
        className="text-gray-700"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button className={Bottom} onClick={() => editingTask(task._id)}>
        Save
      </button>
    </>
  );


  const HandleClick = () => {
    if (!packed) {
      return setPacked(true);
    }
    return setPacked(false);
  };

  return (
    <div className="flex justify-between m-4 bg-slate-700 rounded">
      {packed ? (
        <del>
          <li
            className={`${typeGraphy} p-4 m-2 bg-slate-900 text-center text-slate-50 rounded text-2xl`}
          >
            {index}.{task.name} ✅
          </li>
        </del>
      ) : (
        <li
          className={`${typeGraphy} p-4 m-2 bg-slate-900 text-center text-slate-50 rounded text-2xl`}
        >
          {" "}
          {index}.{task.name}{" "}
        </li>
      )}

      <div className="mx-4 flex justify-center items-center">
        {taskContent}

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
