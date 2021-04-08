import React from "react";
import { Button } from "react-bootstrap";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function ListTask() {
    const todos = useSelector((state) => state.todosReducer.todos);
    const [todosToDisplay, setTodosToDisplay] = useState(todos);
    useEffect(() => {
        setTodosToDisplay(todos);
    }, [todos]);
    const handleClick1 = () => {
        setTodosToDisplay(todos.filter((task) => task.isDone === false));
    };
    const handleClick2 = () => {
        setTodosToDisplay(todos.filter((task) => task.isDone === true));
    };
    const handleClick3 = () => {
        setTodosToDisplay(todos);
    };
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Button variant="primary" onClick={handleClick1}>
                    Show Done
                </Button>{" "}
                <Button
                    variant="secondary"
                    style={{ marginLeft: "20px" }}
                    onClick={handleClick2}
                >
                    Show Not Done
                </Button>{" "}
                <Button
                    variant="info"
                    style={{ marginLeft: "20px" }}
                    onClick={handleClick3}
                >
                    Remove All Filters
                </Button>{" "}
            </div>
            <div>
                {todosToDisplay.map((task, index) => (
                    <Task key={index} index={index} todo_task={task} />
                ))}{" "}
            </div>
        </div>
    );
}

export default ListTask;
