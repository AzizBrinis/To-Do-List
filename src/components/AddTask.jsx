import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { addTask } from "../JS/Actions/actions";

function AddTask() {

  const dispatch = useDispatch();
  const [error,setError] = useState(false);

  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    
    if (inputText.trim() === "") {
      setError(true);
    }else{
    dispatch(addTask(inputText));
    setInputText("");
    setError(false);
  }
  }

  return (
    <div className="form">
      {error && <p style={{color : "red",fontSize : "80%"}}>Error : Please Fill The Input</p>}
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
