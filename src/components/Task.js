import '../style-sheet/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Task({ id, text, completed, completeTask, eliminateTask }) {
    return (
        <div className={completed ? 'container-task completed' : "container-task"}>
            <div
                className="text-task"
                onClick={() => completeTask(id)}>
                {text}
            </div>
            <div
                className="container-icon-task"
                onClick={() => eliminateTask(id)}>
                <AiOutlineCloseCircle className='icon-task' />
            </div>

        </div>
    );
};

export default Task;