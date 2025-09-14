import Tasks from "./Tasks";

function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}) {

    const formattedDate = new Date(project.dueData).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'});

    return (
        <div className="selectedproject-container">
            <header>
                <div>
                    <h1>{project.title}</h1>
                    <button onClick={onDelete}>Delete</button>
                </div>
                <p className="selectedproject-date">{formattedDate}</p>
                <p className="selectedproject-description">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
        </div>
    );
}

export default SelectedProject;