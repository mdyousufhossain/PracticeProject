import AddingTask from "./AddingTask/AddingTask";
import TaskDisplay from "./TaskDisplay/TaskDisplay";
import Layout from "./TaskLayout";

const TaskBody = () => {
  return (
    <Layout>
        <AddingTask />
        <TaskDisplay />
    </Layout>
  );
};

export default TaskBody;
