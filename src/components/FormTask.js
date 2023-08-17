import '../style-sheet/FormTask.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function FormTask(props) {

	const [input, setInput] = useState('');




	const changeHandler = event => {
		setInput(event.target.value);
	};

	const addTaskHandler = event => {
		event.preventDefault();
		const newTask = {
			id: uuidv4(),
			text: input,
			completed: false
		};

		props.onSubmit(newTask);
	};

	return (
		<form
			className="form-task"
			onSubmit={addTaskHandler}>
			<input
				className="input-task"
				type="text"
				placeholder="Write a Task"
				name="text"
				onChange={changeHandler}
			/>
			<button className="button-task">
				Add Task

			</button>

		</form>
	);
};

export default FormTask;