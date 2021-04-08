import { ADD_TASK, EDIT_DONE, EDIT_TASK } from "../Constants/ConstantsType";

const inititalState = {
    todos: [
        { id: Math.random(), task: "Do the housework", isDone: true },
        { id: Math.random(), task: "Cook the dinner", isDone: true },
        {
            id: Math.random(),
            task: "Take care of the children",
            isDone: true,
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
                        isDone: true,
                    },
                ],
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
        case EDIT_DONE: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        }
        default:
            return state;
    }
}
