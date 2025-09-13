
function SelectedProject({project, onDelete}) {

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
            TASKS
        </div>
    );
}

export default SelectedProject;