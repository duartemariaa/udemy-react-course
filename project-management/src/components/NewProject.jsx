import { useRef } from 'react'
import Input from './Input.jsx'
import '../index.css'


function NewProject({onAdd}) {
    const title = useRef();
    const description = useRef();
    const dueData = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueData.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueData: enteredDueDate
        })
    }

    return (
        <div className="form">
            <menu className="menu-form">
                <li>
                    <button className="cancel-btn">Cancel</button>
                </li>
                <li>
                    <button className="save-btn" onClick={handleSave}>Save</button>
                </li>
            </menu>
            <div className="input-form">
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea/>
                <Input type="date" ref={dueData} label="Due Data"/>
            </div>
        </div>
    )
}

export default NewProject