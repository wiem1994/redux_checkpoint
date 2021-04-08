import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { addTask } from "../../Actions";
import { useDispatch } from "react-redux";
function AddTask() {
    const [newTask, setNewTask] = useState("");
    const handleAdd = (input) => {
        setNewTask(input);
    };

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(addTask({ newTask: newTask }));
    };
    return (
        <div>
            <h1
                style={{ color: "red", textAlign: "center", marginTop: "50px" }}
            >
                Todo Application
            </h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "50px",
                }}
            >
                <Form.Control
                    type="text"
                    placeholder="Add task..."
                    style={{ width: "40%" }}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button
                    variant="danger"
                    style={{ marginLeft: "20px" }}
                    onClick={handleSubmit}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddTask;
