import FormTask from "./FormTask";
import '../style-sheet/ListTask.css';
import { useState } from "react";
import Task from "./Task"

function ListTask() {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        console.log('Antes: ' + task);
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    };

    const eliminateTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const completeTask = id => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks)
    };


    return (
        <>
            <FormTask onSubmit={addTask} />
            <div className="container-list-task">
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            completeTask={completeTask}
                            eliminateTask={eliminateTask}
                        />
                    )
                }
            </div>

        </>
    );
};

export default ListTask;