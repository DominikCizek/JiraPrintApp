import React, {useState} from "react";
import useFetch from "../hooks/useFetch";
import TasksList from "./TasksList";
import SubtasksList from "./SubtasksList";
import { formatDate } from "../utilities/formatDate";
import endFlag from '../assets/endFlag.svg';
import startFlag from '../assets/startFlag.svg';
import SprintControls from "./SprintControls";
import { getEmoji } from "../utilities/getEmoji";

export default function Sprint (props){
    const BASE_URL = "https://tappytaps2.atlassian.net/rest/agile/1.0"
    
    const chosenSprint = useFetch(`${BASE_URL}/sprint/${props.id}`).data;
    const sprintTasks = useFetch(`${BASE_URL}/board/1/sprint/${props.id}/issue/?state=active`).data
    const [sprintImage, setSprintImage] = useState();
    
    function getSubtasks(){
        //assigning emoji to task and every subtask
        if(sprintTasks){
            let subtasksArr = [];
            sprintTasks.data.issues.forEach((issue, index) =>{
                const emoji = getEmoji(index);
                issue.emoji = emoji;
                if(issue.fields.subtasks ){
                    issue.fields.subtasks.forEach(subtask =>{
                        subtasksArr.push({...subtask, emoji})
                    })
                }
            })
            return subtasksArr
        }
    }
    
    if(!chosenSprint  || !sprintTasks) return <h1>Loading sprint data...</h1>
     
     const validTasks = sprintTasks.data.issues.filter(iss => iss.fields.subtasks.length>0);
     const cardCount = validTasks.length + getSubtasks().length; 
    return(
        <>
        <SprintControls tasks={cardCount} handleUpload={(val)=>{setSprintImage(val)}}/> 
        <div id="sprintBanner">
            <div id="sprintHeader">
                <div id="sprintInfo">
                    <h3 className="sprintName">{chosenSprint.data.name}</h3>
                    <h2 className="sprintGoal">{chosenSprint.data.goal}</h2>
                </div>
                {sprintImage && <img src={URL.createObjectURL(sprintImage)} className="sprintImage"/>}
            </div>
            <div id="sprintTimeHolder">
                <div id="sprintStart" className="sprintTime">
                    <img src={startFlag} />
                    <h3>{formatDate(chosenSprint.data.startDate)}</h3>
                </div>
                <div id="sprintEnd" className="sprintTime">
                    <img src={endFlag} />
                    <h3>{formatDate(chosenSprint.data.endDate)}</h3>
                </div>
            </div>
        </div>
        {validTasks && <TasksList tasks={validTasks}/> }
        {validTasks && <SubtasksList subtasks={getSubtasks()}/>}
        </>
    )
    
}