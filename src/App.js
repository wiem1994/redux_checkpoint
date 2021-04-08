import "./App.css";
import React from "react";
import AddTask from "./Components/AddTask/AddTask";
import ListTask from "./Components/ListTask/ListTask";

function App() {
    return (
        <div>
            <AddTask />
            <ListTask />
        </div>
    );
}

export default App;
