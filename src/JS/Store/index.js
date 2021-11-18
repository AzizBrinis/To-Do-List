import { createStore } from "redux";
import tasksReducers from "../Reducers";

//     if (action.type === "addtask" && action.payload.trim() !== "") {
//         return {
//             ...state,
//             tasks : [...state.tasks , {description : action.payload, id : Math.floor(Math.random() * 1000000000000000) , isDone : false, edit:false}]
//         }

//     }
//     if (action.type === "delete") {
//         return {
//             ...state,
//             tasks : state.tasks.filter(task => task.id !== action.payload )
//         }
//     }
//     if (action.type === "toggleIsDone") {
//         state.tasks.find(task => task.id === action.payload).isDone = !state.tasks.find(task => task.id === action.payload).isDone;
//         return {
//             ...state,
//             tasks : state.tasks
//         }
//     }
//     if (action.type === "toggleEdit") {
//         state.tasks.find(task => task.id === action.payload).edit = !state.tasks.find(task => task.id === action.payload).edit;

//         return {
//             ...state,
//             tasks : state.tasks
//         }
//     }
//     if (action.type === "toggleSave") {
//         state.tasks.find(task => task.id === action.payload.id).edit = !state.tasks.find(task => task.id === action.payload.id).edit;
//         state.tasks.find(task => task.id === action.payload.id).description = action.payload.newText;
//         return {
//             ...state,
//             tasks : state.tasks
//         }
//     }
//     return state;
// };

const store = createStore(tasksReducers);

export default store;