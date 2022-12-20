import React, {useState} from "react";
import checkIcon from '../assets/checkIcon.svg';
import printIcon from '../assets/printIcon.svg';
import uploadIcon from '../assets/uploadIcon.svg';


export default function SprintControls(props){
    const [showUpload, setShowUpload] = useState(false)

    function handleUpload(e){
        props.handleUpload(e.target.files[0])
        setShowUpload(false)
    }
    return(
        <div className="sprintControls">
            <p><img src={checkIcon} id="checkIcon" alt="checkIcon" />Vygenerováno {props.tasks} kartiček</p>
            <div>
                <button className="btn secondary" onClick={()=>setShowUpload(prev => !prev.showUpload)}>
                <img src={uploadIcon} alt="Upload icon" className="controlIcon"/>
                    Nahrát obrázek
                </button>
                <button className="btn secondary" onClick={()=>window.print()}>
                <img src={printIcon} alt="Print icon" className="controlIcon" />
                    Vytisknout
                </button>
            </div>
            {showUpload && <input type="file" onChange={handleUpload} />}
        </div>
    )
}