import React, {useState} from "react";

export default function SprintGenerator(props){

const [chosenSprintId, setChosenSprintId] = useState(props.data.data.values[0].id);


function handleChange(e) {
    setChosenSprintId(e.target.value)
}
function handleGenerate(e){
e.preventDefault();
props.setSprint(chosenSprintId)
}

    return(
        <div id="sprintGenerator">
            <h2>Generátor sprint kartiček</h2>
            <h4 className="sprintSelectText">Zde můžete generovat tiskutelné kartičky pro vybraný sprint</h4>
            <form id="sprintDropdown">
                <select name="sprint" id="sprintSelect" onChange={handleChange}  >
                    {props.data && props.data.data.values.map(sprint => <option key={sprint.id} value={sprint.id} className="sprintOption" >{sprint.name}</option>)}
                </select>
                <button className="btn primary" onClick={handleGenerate}>Generovat</button>
            </form>
        </div>
    )
}