import { ADD_TASK, EDIT_DONE, EDIT_TASK } from "../Constants/ConstantsType";

const inititalState = {
    todos: [
        { id: Math.random(), task: "Do the housework", isDone: "false" },
        { id: Math.random(), task: "Cook the dinner", isDone: "false" },
        {
            id: Math.random(),
            task: "Take care of the children",
            isDone: "false",
        },
    ],
};

export default function todosReducer(state = inititalState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK: {
            return {
                todos: [
                    ...state.todos,
                    {
                        id: Math.random(),
                        task: payload.newTask,
                        isDone: "false",
                    },
                ],
            };
        }
        case EDIT_DONE: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        }
        case EDIT_TASK: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, task: payload.editedTask }
                        : task
                ),
            };
        }
        default:
            return state;
    }
}
