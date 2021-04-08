import React from "react";
import { Button } from "react-bootstrap";
import EditTask from "../EditTask/EditTask";
import { editDone } from "../../Actions";
import { useDispatch } from "react-redux";

function Task({ todo_task, index }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(editDone({ id: todo_task.id }));

        todo_task.isDone = !todo_task.isDone;
    };
    return (
        <div
            className="task"
            style={{
                display: "flex",
                justifyContent: "space-between",
                width: "50%",
                margin: "40px auto 0 auto",
            }}
        >
            <h4
                style={{
                    textDecoration: todo_task.isDone ? "none" : "line-through",
                }}
            >
                <span style={{ color: "blue" }}>Task {index + 1}:</span>{" "}
                {todo_task.task}
            </h4>
            <div className="taskBtns">
                <Button
                    variant={todo_task.isDone ? "outline-danger" : "success"}
                    style={{ marginLeft: "20px" }}
                    onClick={handleClick}
                >
                    {todo_task.isDone ? "done" : "undo"}
                </Button>
                <EditTask id={todo_task.id} />
            </div>
        </div>
    );
}

export default Task;
