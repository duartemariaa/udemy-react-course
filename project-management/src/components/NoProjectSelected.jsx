import noProject from "../assets/no-projects.png";
import Button from "./Button.jsx";

function NoProjectSelected() {
    return (
        <div className="noproject-container">
            <img src={noProject} alt="lista de tarefas vazia" />
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <Button>Create new project</Button>
        </div>
    )
}

export default NoProjectSelected;

