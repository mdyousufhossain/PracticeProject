const AddingTask = () => {
  return (
    <div className="w-full">
      <div className="md:w-4/5 mx-auto">
        <div className="md:w-4/5 mx-auto flex items-center ">
          <input
            className="w-full p-6 rounded-md mr-4"
            type="text"
            placeholder="Add a Task"
          />
          <button className="w-28 h-12 bg-slate-400 rounded">Add task</button>
        </div>
      </div>
    </div>
  );
};


export default AddingTask