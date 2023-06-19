import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import InputTaker from "./InputTaker";
import TaskDisplay from "../TaskDisplay/TaskDisplay";
import { typeGraphy } from "../TaskDisplay/TaskDisplay";
import TaskMaker from "../TaskDisplay/TaskMaker";

// ;

const AddingTask = () => {
  // adding the data
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  //storeing and displaying data
  const [task, setTask] = useState([]);
  const [isloading, setLoading] = useState(false);
  // editing
  // const [isEditing, setisEditing] = useState(false);
  // const [TaskID, setTaskID] = useState("");

  const { name } = formData;

  // helper function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // displaying data from the backend
  const getTasks = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/api/tasks");
      setTask(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // using effect to retrive data without any sideeffect
  useEffect(() => {
    getTasks();
  }, []);

  // adding data to the database
  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input field cannot be emty");
    }
    // trying to pushing item to the database
    try {
      await axios.post(`http://localhost:3000/api/tasks`, formData);
      getTasks();
      console.log("data submited", formData);
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  // deleteing task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/tasks/${id}`);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //  const handleChangeTask =  (task) => {
  //     setTask(
  //       task.map((t) => {
  //         if (t.id === task.id) {
  //           return task;
  //         } else {
  //           return t;
  //         }
  //       })
  //     );
  //   }
  // first job is done i can find without
  const editingTask = async (tasks, newData) => {
    let index;
    const idFinder = () => {
      task.map((id) => {
        if (id._id === tasks) {
          index = id;
          return index;
        }
      });
    };
     // assaigning data_id  to the index
    idFinder();

    if (newData !== "") {
      console.log(index._id, newData);
      try {
        await axios.patch(
          `http://localhost:3000/api/tasks/${index._id}`,
          {name:newData}
        );
        getTasks()
      } catch (error) {
        console.error(error);
      }
    }
  };


  const handleDone = async (tasks, newData) => {
    let index;
    const idFinder = () => {
      task.map((id) => {
        if (id._id === tasks) {
          index = id;
          return index;
        }
      });
    };

    idFinder();

    if (newData !== "") {
      console.log("this is from true false ",index._id, newData);
      try {
        await axios.patch(
          `http://localhost:3000/api/tasks/${index._id}`,
          {completed:newData}
        );
        getTasks()
      } catch (error) {
        console.error(error);
      }
    }

  }

  return (
    <div className="w-full">
      <InputTaker
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <TaskDisplay>
        {isloading && <div> Loading ... </div>}
        {!isloading && task.length === 0 ? (
          <p className={typeGraphy}>Please Add a task , </p>
        ) : (
          task.map((tasks, index) => {
            return (
              <TaskMaker
                key={tasks._id}
                task={tasks}
                index={index + 1}
                deleteTask={deleteTask}
                tasksid={tasks._id}
                editingTask={editingTask}
                isDone={handleDone}
              />
            );
          })
        )}
      </TaskDisplay>
    </div>
  );
};

export default AddingTask;
