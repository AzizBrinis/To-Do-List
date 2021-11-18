import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from "react-redux";
import { deleteOption, doneOption, editOption, saveOption } from "../JS/Actions/actions";

function Task(props) {
  const [newText,setNewText] = useState(props.text)
  const [error , setError] = useState(false);
  const dispatch = useDispatch();
  const isDone = useSelector(state => state.tasks.find(task => task.id === props.id).isDone );
  const isEdited = useSelector(state => state.tasks.find(task => task.id === props.id).edit );

  function handleChange(e) {
    setNewText(e.target.value);
    
  }
  function handleClick() {
    if (newText.trim() === "") {
      setError(true);
    }else{
    dispatch(saveOption({id : props.id,newText : newText}));
    props.changeUpdate();
    setError(false);
    }

  }
  function handleDone() {
    dispatch(doneOption(props.id));
    props.changeUpdate();
  }

  return (
    <div
      className="space"
 
    >
      <li style={isDone ? {textDecoration : "line-through"} : null}>{isEdited ? <input autoFocus type="text" value={newText} onChange={(e) => handleChange(e)} onKeyPress={(e) => e.key === "Enter" && handleClick()} /> : props.text}</li>

      {error && <p style={{color : "red",fontSize : "70%",textAlign:"start"}}>Error : Fill The Input</p>}
      <div className="itemsPosition">
        {!isEdited && <button onClick={() => dispatch(editOption(props.id))}>Edit</button>}
        {isEdited && <button onClick={handleClick}>Save</button>}
        {!isEdited && <button onClick={handleDone}>{isDone ? "unDone" : "Done"}</button>}
        <span className="trashIcon" onClick={() => dispatch(deleteOption(props.id))}><FontAwesomeIcon icon={faTrashAlt} /></span>
      </div>
    </div>
  );
}

export default Task;
