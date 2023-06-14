import { useState } from "react";

const AddingTask = () => {
  const [items, setItem] = useState("");
  const [inputvalue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  console.log(items);

  
  const handleSendingData = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name : items}),
    };

    fetch("http://localhost:3000/api/tasks", requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log(`Successfully sent data ${items}`);
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmit = () => {
    if (inputvalue.trim() !== "") {
      setItem(inputvalue);
      setInputValue("")
      handleSendingData();
    }
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
            onChange={handleInputChange}
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
