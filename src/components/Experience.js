import { useState } from "react";

const Experience  = ({name, date, content}) => { 

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
            <div>
            <p><h4>{name}</h4>({date})</p>
            <button onClick={handleClick}>{buttonname}</button>
            </div>
            <div>
            {toshow && <p> {content} </p>}   
            </div>
        </div>
    );
}

export default Experience;