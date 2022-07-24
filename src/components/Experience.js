import { useState } from "react";

const Experience  = ({name, date, skills, contents}) => { 

    const [toshow, setToShow] = useState(false);
    const [buttonname, setButtonName] = useState("More Info");

    const handleClick  = () => {
        if(!toshow){
            setButtonName("Less Info");
        } else{
            setButtonName("More Info");
        }
        setToShow(!toshow);
    }

    return (
        <div className="experience">
            <h4>{name}</h4>
            <div className="exp-head">
            ({date})
            </div>
            <div className="exp-head">
            <u>Skills Used:</u> {skills}
            </div>
            <div>
            <p><button onClick={handleClick}>{buttonname}</button></p>
            </div>
            <div>
            {toshow && <p> {contents.map(entry => (<div><p>{entry}</p></div>))} </p>}   
            </div>
        </div>
    );
}

export default Experience;