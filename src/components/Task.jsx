import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from "react-redux";
import { deleteOption, doneOption, editOption, saveOption } from "../JS/Actions/actions";

function Task(props) {
  const [newText,setNewText] = useState(props.text)
  const dispatch = useDispatch();
  const isDone = useSelector(state => state.tasks.find(task => task.id === props.id).isDone );
  const isEdited = useSelector(state => state.tasks.find(task => task.id === props.id).edit );

  function handleChange(e) {
    setNewText(e.target.value);
    
  }
  function handleClick() {
    dispatch(saveOption({id : props.id,newText : newText}));
    props.changeUpdate();

  }
  function handleDone() {
    dispatch(doneOption(props.id));
    props.changeUpdate();
  }

  return (
    <div
      className="space"
    //   onClick={() => {
    //     props.onChecked(props.id);
    //   }}
    >
      <li style={isDone ? {textDecoration : "line-through"} : null}>{isEdited ? <input autoFocus type="text" value={newText} onChange={(e) => handleChange(e)} onKeyPress={(e) => e.key === "Enter" && handleClick()} /> : props.text}</li>
      {/* <input type="text" /> */}
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
