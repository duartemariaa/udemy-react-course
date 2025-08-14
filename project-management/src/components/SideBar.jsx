import NewProject from './NewProject.jsx'
import '../index.css'
import Button from './Button.jsx'

function SideBar({onStartAddProject, projects}){
    return (
        <aside>
            <h2 className="sidebar-title">YOUR PROJECTS</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="sidebar-list">
                {projects.map((project) => (
                    <li key={project.id}>
                        <button className="sidebar-btn">{project.title}</button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default SideBar