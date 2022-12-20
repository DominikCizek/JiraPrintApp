import React from 'react'

export default function Task(props){
    const taskIsValid = props.task.fields.subtasks.length>0;
    if(taskIsValid){
        return(
            <div className="task">
                <div className="taskHeader">
                    <div className="taskEmoji">
                        <p>{props.task.emoji}</p>
                        <h4>{props.task.key}</h4>
                    </div>
                    <div className="subtaskCount">
                        <p>{props.task.fields.subtasks.length}</p>
                    </div>
                </div>
                <p className='taskSummary'>
                {props.task.fields.summary}
                </p>
            </div>
        )
    }
    
}