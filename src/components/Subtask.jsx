import React from 'react';

export default function Subtask(props){
return(
    <div className="subtask">
        <div>
            <div className="taskHeader">
                <div className="taskEmoji">
                    {props.subtask.emoji}
                    <h4>{props.subtask.key}</h4>
                </div>
            </div>
            <div className="taskSummary">
                {props.subtask.fields.summary}
            </div>
        </div>
    </div>
)
}