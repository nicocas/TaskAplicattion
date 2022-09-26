import './App.css';
import freecodecampLogo from './images/freecodecamp-logo.png';
import TaskList from './components/TaskList.jsx';


function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-conteiner'>
        <img
          src= {freecodecampLogo}
          className= 'freecodecamp-logo'
          alt= 'logo de FreeCodeCamp'
        />
      </div>
      <div className= 'task-list'>
        <h1>Mis Tareas</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
