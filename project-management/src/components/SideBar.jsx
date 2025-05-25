import NewProject from './NewProject.jsx'
import '../index.css'
import Button from './Button.jsx'

function SideBar(){

    return (
        <aside>
            <h2>YOUR PROJECTS</h2>
            <div>
                <Button>+ Add Project</Button>
            </div>

            <ul>
            </ul>
        </aside>
    )
}

export default SideBar