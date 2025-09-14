import { useState } from "react";

function NewTask({onAdd}){
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleCLick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="newtask-container">
            <input type="text" onChange={handleChange} value={enteredTask}/>
            <button onClick={handleCLick}>Add Task</button>
        </div>
    )
}

export default NewTask;