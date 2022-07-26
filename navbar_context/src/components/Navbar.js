import React, { useContext } from "react";
import Context from "./../context/Context";

const style = {
    background: "purple",
    display: "flex",
    color: "white",
    padding: "10px",
    alignItems: "center"
};

const Navbar = () => {
    const context = useContext(Context);

    return (
        <nav style = {style}>
            <div className="nav-wrapper">
                <span className="brand-logo">Hello, {context.name} !</span>
            </div>
        </nav>
    );
};

export default Navbar



