import { useState } from "react";

const AddingTask = () => {
  const [items, setItem] = useState({});
  const [inputvalue, setInputValue] = useState("");


  const handleSubmit = () => {
    if (inputvalue.trim() !== "") {
      setItem({ ...items, inputvalue });
      console.log(items);
    }
    setInputValue("");
  };

  return (
    <div className="w-full">
      <div className="md:w-4/5 mx-auto">
        <div className="md:w-4/5 mx-auto flex items-center ">
          <input
            className="w-full p-6 rounded-md mr-4"
            type="text"
            placeholder="Add a Task"
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className="w-28 h-12 bg-slate-400 rounded"
            onClick={handleSubmit}
          >
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddingTask;
