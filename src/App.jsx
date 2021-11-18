import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddTask/>
      <ListTask />
    </div>
  );
}

export default App;
