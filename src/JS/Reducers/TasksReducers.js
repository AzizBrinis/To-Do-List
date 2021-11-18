import {
    ADD_TASK,
    DELETE,
    TOGGLE_ISDONE,
    TOGGLE_EDIT,
    TOGGLE_SAVE
} from "../ActionsTypes/actionsTypes";

const initialState = { tasks : [] };

const TasksReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: 
        if (action.payload.trim() !== "") {
            return {
                ...state,
                tasks : [...state.tasks , {description : action.payload, id : Math.floor(Math.random() * 1000000000000000) , isDone : false, edit:false}]
            };
        }else{
            return state;
        };
        
        case DELETE : return {
            ...state,
            tasks : state.tasks.filter(task => task.id !== action.payload )
        };
        case TOGGLE_ISDONE : 
        state.tasks.find(task => task.id === action.payload).isDone = !state.tasks.find(task => task.id === action.payload).isDone;
        return {
            ...state,
            tasks : state.tasks
        }
        case TOGGLE_EDIT : 
        state.tasks.find(task => task.id === action.payload).edit = !state.tasks.find(task => task.id === action.payload).edit;

        return {
            ...state,
            tasks : state.tasks
        }
        case TOGGLE_SAVE : 
        state.tasks.find(task => task.id === action.payload.id).edit = !state.tasks.find(task => task.id === action.payload.id).edit;
        state.tasks.find(task => task.id === action.payload.id).description = action.payload.newText;
        return {
            ...state,
            tasks : state.tasks
        }
        default:
      return state;
    }
};

export default TasksReducers;