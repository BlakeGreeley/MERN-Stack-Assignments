import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const style = {
    background: "purple",
    display: "flex",
    color: "white",
    padding: "10px",
    alignItems: "center"
};

export default () => {
    const { name } = useContext(UserContext);

    return <div style= { style }>Hi {name} !</div>
}

