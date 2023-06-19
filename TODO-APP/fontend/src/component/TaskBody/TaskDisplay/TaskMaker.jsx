import { typeGraphy, Bottom } from "./TaskDisplay";
import { useState } from "react";

/**
 * 
 * task : all the data 
 * index : data id 
 * "delete" task is a funciton from the adding task for deleting items
 *  editingTask is also fucntion for editing items 
 */
// eslint-disable-next-line react/prop-types   
const TaskMaker = ({task,index,deleteTask,editingTask,isDone,}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setnewData] = useState({});

  let taskContent;
  let taskInput;

  // eslint-disable-next-line react/prop-types
  const { completed } = task;

  completed
    ? (taskContent = (
        <del>
          <li
            className={`${typeGraphy} p-4 m-2 bg-slate-900 text-center text-slate-50 rounded text-2xl`}
          >
             
             {/*eslint-disable-next-line react/prop-types */ }    
            {index}.{task.name} ✅
          </li>
        </del>
      ))
    : (taskContent = (
        <li
          className={`${typeGraphy} p-4 m-2 bg-slate-900 text-center text-slate-50 rounded text-2xl`}
        >
          {" "}
          {/*eslint-disable-next-line react/prop-types */ }    
          {index}.{task.name}{" "}
        </li>
      ));

  const HandleClick = () => {
    if (!completed) {
      {/*eslint-disable-next-line react/prop-types */ }    
      isDone(task._id, true);
    }
    if (completed) {
      {/*eslint-disable-next-line react/prop-types */ }    
      isDone(task._id, false);
    }
  };

  const handleupdate = () => {
    if (!isEditing) {
      setIsEditing(true);
      setnewData(task);
    }
  };

  isEditing
    ? (taskInput = (
        <>
          <input
            type="text"
            className="p-4 text-sm  w-96"
            value={newData.name}
            onChange={(e) => {
              setnewData(e.target.value);
            }}
          />
          <button
            className={Bottom}
            onClick={() => {
              {/*eslint-disable-next-line react/prop-types */ }    
              editingTask(task._id, newData);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ))
    : (taskInput = (
        <>
          <button className={Bottom} onClick={handleupdate}>
            Edit
          </button>
        </>
      ));

  return (
    <div className="md:flex  md:justify-between m-4 bg-slate-700 rounded">
      {taskContent}

      <div className="mx-4 py-2 flex justify-center items-center">
        {taskInput}
        {/*eslint-disable-next-line react/prop-types */ }    
        <button className={Bottom} onClick={() => deleteTask(task._id)}>
          Delete
        </button>
        <button className={Bottom} onClick={HandleClick}>
          {completed ? "Cancel":"Done"}
        </button>
      </div>
    </div>
  );
};

export default TaskMaker;
