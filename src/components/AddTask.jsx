import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { addTask } from "../JS/Actions/actions";

function AddTask() {

  const dispatch = useDispatch();

  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    // setItems((prevItems) => {
    //   return [...prevItems, inputText];
    // });
    dispatch(addTask(inputText));
    setInputText("");
  }

  return (
    <div className="form">
      <input
        onChange={handleChange}
        type="text"
        value={inputText}
        onKeyPress={(e) => e.key === "Enter" && addItem()}
      />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default AddTask;
