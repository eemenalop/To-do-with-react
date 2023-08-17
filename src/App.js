import './App.css';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="to-do-app">
      <div className='principal-tasks-list'>
        <h1>My Tasks</h1>
        <ListTask />
      </div>
    </div>
  );
};

export default App;
