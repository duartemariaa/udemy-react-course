import NewProject from './NewProject.jsx'
import '../index.css'
import Button from './Button.jsx'

function SideBar({onStartAddProject, projects, onSelectProject, selectedProjecId}){
    return (
        <aside>
            <h2 className="sidebar-title">YOUR PROJECTS</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="sidebar-list">
                {/* if(project.id === selectedProjecId){

                } */}

                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <button className="sidebar-btn" onClick={() => onSelectProject(project.id)}>{project.title}</button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    )
}

export default SideBar