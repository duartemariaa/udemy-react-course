import SideBar from './components/SideBar';
import NewProject from './components/NewProject.jsx';
import './App.css';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import { useState } from 'react';


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  };

  let content;
  if(projectsState.selectedProjectId === null){
    content = <NewProject/>
  }else if (projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }


  return (
    <main>
      <SideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  )
}

export default App