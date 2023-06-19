// eslint-disable-next-line react/prop-types   
const InputTaker = ({ name, handleInputChange, createTask}) => {
  return (
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

        <button className="w-28 h-12 bg-slate-400 rounded" onClick={createTask}>
          {"Add"}
        </button>
      </div>
    </div>
  );
};

export default InputTaker;
