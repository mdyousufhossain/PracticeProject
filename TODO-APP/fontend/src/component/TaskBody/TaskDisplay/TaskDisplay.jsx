import { useEffect, useState } from "react";
import axios from "axios";

const TaskDisplay = () => {
  const [tasks, setTask] = useState({});
  
  useEffect(() => {
     axios.get("http://localhost:3000/api/tasks")
     .then(response => {
        const data = response.data
        setTask(data)
     })

  });
  return (
    <>
      <section className="bg-slate-300 w-4/5 mx-auto">
        <div className="bg-slate-400 w-full">
          <ul>
            {tasks.map((item) => (
              <li key={item}> {item.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TaskDisplay;
