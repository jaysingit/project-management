import { useState } from "react";
export default function NewTask({ onAdd }) {
    const[enteredTask, setEnteredTask] = useState('');
    function handleTaskChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick()
    {
        if(enteredTask.trim().length === 0) return;
        onAdd(enteredTask);
        setEnteredTask("");

    }

    return(
        <div className="flex items-center gap-4">
            <input value={enteredTask} onChange={handleTaskChange} type="text" placeholder="Task Title" className="w-64 rounded-sm px-2 py-4 bg-stone-200" />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">
                Add Task
            </button>            
        </div>
    );
}