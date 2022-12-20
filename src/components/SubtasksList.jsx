import React from "react";
import Subtask from "./Subtask";

export default function SubtasksList(props){

    return(
    <div className="subtasksHolder">
        {props.subtasks.map(subtask => <Subtask key={subtask.id} subtask={subtask}/>)}
    </div>
)
    
}