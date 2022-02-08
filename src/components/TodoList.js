import React from "react";
import Todo from "./Todo";

const TodoList = ({tasks, match, onToggleCompleted}) =>{
    let filteredTasks;
    switch (match.params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
        break;
        default:
            filteredTasks = tasks
        break;
    }

    if (filteredTasks.length === 0) {
        return(
            <React.Fragment>
                <h1 classNameName="m-3">Liste de tâches</h1>
                <ul classNameName="list-group m-3">
                    <i classNameName="list-group-item">Aucune tâche à afficher !</i>
                </ul>
            </React.Fragment>
        )
    }else {
        return(
            <React.Fragment>
                <h1 classNameName="m-3">Liste de tâches</h1>
                <ul classNameName="list-group m-3">
                    {
                        filteredTasks.map((task) => <Todo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default TodoList