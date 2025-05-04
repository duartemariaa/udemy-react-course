import Input from './Input.jsx'
import '../index.css'

function NewProject() {
    return (
        <div className="form">
            <menu className="menu-form">
                <li>
                    <button className="cancel-btn">Cancel</button>
                </li>
                <li>
                    <button className="save-btn">Save</button>
                </li>
            </menu>
            <div className="input-form">
                <Input label="Title"/>
                <Input label="Description" textarea/>
                <Input label="Due Data"/>
            </div>
        </div>
    )
}

export default NewProject