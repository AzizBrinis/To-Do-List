// import React, { useState } from "react";
// import Task from "./Task";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";

function App() {
  // const [inputText, setInputText] = useState("");
  // const [items, setItems] = useState([]);

  // function handleChange(event) {
  //   const newValue = event.target.value;
  //   setInputText(newValue);
  // }

  // function addItem() {
  //   setItems((prevItems) => {
  //     return [...prevItems, inputText];
  //   });
  //   setInputText("");
  // }

  // function deleteItem(id) {
  //   setItems((prevItems) => {
  //     return prevItems.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddTask
      //   handleChange={handleChange}
      //   inputText={inputText}
      //   addItem={addItem}
      // 
      />
      <ListTask />
      {/* <div>
        <ul>
          {items.map((todoItem, index) => (
            <Task
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default App;
