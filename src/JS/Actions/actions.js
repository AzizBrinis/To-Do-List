import {
    ADD_TASK,
    DELETE,
    TOGGLE_ISDONE,
    TOGGLE_EDIT,
    TOGGLE_SAVE
} from "../ActionsTypes/actionsTypes";

export const addTask = (payload) => {
    return {type : ADD_TASK, payload };
};

export const saveOption = (payload) => {
    return {type : TOGGLE_SAVE, payload};
};

export const doneOption = (payload) => {
    return {type : TOGGLE_ISDONE, payload};
};

export const editOption = (payload) => {
    return {type : TOGGLE_EDIT, payload};
};

export const deleteOption = (payload) => {
    return {type : DELETE, payload };
};