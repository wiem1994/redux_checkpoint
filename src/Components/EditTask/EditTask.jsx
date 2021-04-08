import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../Actions";

function EditTask({ id }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editedTask, setEditedTask] = useState({});
    const handleTask = (input) => {
        setEditedTask(input);
    };
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(editTask({ editedTask: editedTask, id }));
        handleClose();
    };

    return (
        <>
            <Button
                variant="outline-dark"
                onClick={handleShow}
                style={{ marginLeft: "20px" }}
            >
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="Edit your task here..."
                        onChange={(e) => handleTask(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
