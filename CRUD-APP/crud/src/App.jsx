import response from "./Data/data";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hi ? </h1>

      {response.map((item) => (
        <li key={item}>{item.username}</li>
      ))}
    </>
  );
}

export default App;
