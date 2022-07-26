import React,  { useContext } from "react";
import Context from "../context/Context";

const Form = () => {
    const context = useContext(Context);
    let currentName = "";
    const onChange = e => {
        currentName = e.target.value;
    };

    const onClick = e => {
        context.setName(currentName);
        e.target.value = "";
    };

    return (
        <div className='form'>
            <div className="input-field inline" style={{width: "40%"}}>
                <input 
                    className="validate"
                    id="name-input"
                    onChange={onChange}
                    defaultValue=""
                    type="text"
                />
            </div>

            

            <button
                onClick={onClick}
                className="btn red darken-1"
                style={{marginLeft: '1em'}}
            >
                <span>Change</span>
            </button>
        </div>
    );
};

export default Form;