import Task from './Task';

export default function TasksList(props){

return(
    <div className="tasksHolder">
        {props.tasks.map(task => <Task key={task.id} task={task}/>)}
    </div>
     
)
}