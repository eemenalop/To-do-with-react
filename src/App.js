import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="to-do-app">
      <div className='principal-tasks-list'>
        <h1>My Tasks</h1>
        <Task text='Aprender React' />

      </div>
    </div>
  );
}

export default App;
