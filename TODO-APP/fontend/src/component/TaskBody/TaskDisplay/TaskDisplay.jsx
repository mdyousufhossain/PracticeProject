import TaskMaker from "./TaskMaker";

export const Bottom =
  "w-16 h-8 p-2 mx-2 text-gray-400 bg-slate-800 text-sm rounded";

export const typeGraphy = "text-start capitalize align-middle";

const TaskDisplay = ({ children }) => {
  return (
    <>
      <section className="bg-slate-300 w-4/5 mx-auto">
        <div className="bg-slate-400 w-full">
          <ul className="flex flex-col justify-center mt-8">{children}</ul>
        </div>
      </section>
    </>
  );
};

export default TaskDisplay;
