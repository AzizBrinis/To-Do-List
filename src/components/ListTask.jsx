import { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";


const ListTask = () => {
  const items = useSelector(state => state.tasks);
  const [update,setUpdate] = useState(false);
  const [filteredList,setFilteredList] = useState(false);
  const [undoneList,setUndoneList] = useState(false);
    
    console.log(items);
    function changeUpdate() {
      setUpdate(!update);
    }
  

    function handleDoneList(e) {
      console.log(e.target.checked);
      setFilteredList(!filteredList);

    }
    function handleUnDoneList(e) {
      console.log(e.target.checked);
      setUndoneList(!undoneList);

    }


    return (
        <div>
        <input type="checkbox" onChange={(e) => handleDoneList(e)} name="Done" />
        <label className="spaceCheck"> Done</label>
        <input type="checkbox" onChange={(e) => handleUnDoneList(e)} name="NotDone" />
        <label> Not Done</label>
        <ul>
          {!filteredList && !undoneList && items.map((todoItem) => (
            <Task
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.description}
              changeUpdate={changeUpdate}
           
            />
          ))}
          {filteredList && items.filter(item => item.isDone === true).map((todoItem) => (
            <Task
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.description}
              changeUpdate={changeUpdate}
      
            />
          ))}
          {undoneList && items.filter(item => item.isDone === false).map((todoItem) => (
            <Task
              key={todoItem.id}
              id={todoItem.id}
              text={todoItem.description}
              changeUpdate={changeUpdate}
      
            />
          ))}

        </ul>
      </div>
    )
};

export default ListTask;