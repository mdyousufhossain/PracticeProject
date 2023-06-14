import { useState } from "react";
import { toast } from 'react-toastify'
import axios from 'axios'

const AddingTask = () => {
  const [formData, setFormData] = useState({
    name: "", 
    completed: false
  });

  

  const { name  } = formData

  const handleInputChange = (e) => {
    const { name ,value } = e.target  
    setFormData({...formData ,[name]: value});
  };

  const createTask = async (e) => {
    e.preventDefault()
    if(name === ""){
      return toast.error("Input field cannot be emty")
    }

    try {
        await axios.post("http://localhost:3000/api/tasks",formData)
        console.log("data submited", formData)
    } catch (error) {

        toast.error(error.message)
        console.error(error)
    }
  }

  return (
    <div className="w-full">
      <div className="md:w-4/5 mx-auto">
        <div className="md:w-4/5 mx-auto flex items-center ">
          <input
            className="w-full p-6 rounded-md mr-4"
            type="text"
            placeholder="Add a Task"
            name="name"
            value={name}
            onChange={handleInputChange}
          />

          <button
            className="w-28 h-12 bg-slate-400 rounded"
            onClick={createTask}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddingTask;
