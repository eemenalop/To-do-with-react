import '../style-sheet/Task.css'


function Task({ text }) {
    return (
        <div className="container-task">
            <div className="text-task">
                {text}

            </div>
            <div className="icon-task">
                Eliminar

            </div>

        </div>
    );
};

export default Task;