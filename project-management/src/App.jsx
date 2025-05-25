import SideBar from './components/SideBar';
import NewProject from './components/NewProject.jsx';
import './App.css';
import NoProjectSelected from './components/NoProjectSelected.jsx';


function App() {
  return (
    <main>
      <SideBar/>
      <NoProjectSelected/>
    </main>
  )
}

export default App
