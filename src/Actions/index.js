import { ADD_TASK, EDIT_DONE, EDIT_TASK } from "../Constants/ConstantsType";

export function addTask(payload) {
    return {
        type: ADD_TASK,
        payload: payload,
    };
}

export function editDone(payload) {
    return {
        type: EDIT_DONE,
        payload: payload,
    };
}

export function editTask(payload) {
    return {
        type: EDIT_TASK,
        payload: payload,
    };
}
