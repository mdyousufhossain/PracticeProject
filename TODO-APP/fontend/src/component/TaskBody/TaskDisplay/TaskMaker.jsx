import { typeGraphy, Bottom } from "./TaskDisplay";
import { useState } from "react";

const TaskMaker = ({ task, index, deleteTask, tasksid, getSingleTask }) => {
  const [packed, setPacked] = useState(false);

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
            {index}.{task} ✅
          </li>
        </del>
      ) : (
        <li
          className={`${typeGraphy} p-4 m-2 bg-slate-900 text-center text-slate-50 rounded text-2xl`}
        >
          {" "}
          {index}.{task}{" "}
        </li>
      )}

      <div className="mx-4 flex justify-center items-center">
        <button className={Bottom} onClick={() => getSingleTask()}>Edit</button>
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
