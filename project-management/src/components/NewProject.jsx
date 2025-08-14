import { useRef } from 'react'
import Input from './Input.jsx'
import '../index.css'
import Modal from './Modal.jsx';


function NewProject({onAdd, onCancel}) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueData = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueData.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueData: enteredDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="okay"> 
                <h2>Invalid Input</h2>
                <p>Oops... looks like you forgot to enter a value.</p>
                <p>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="form">
                <menu className="menu-form">
                    <li>
                        <button className="cancel-btn" onClick={onCancel}>Cancel</button>
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
        </>

    )
}

export default NewProject