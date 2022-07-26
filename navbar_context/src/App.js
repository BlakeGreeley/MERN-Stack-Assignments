import './App.css';
import Context from "./context/Context";
import "./App.css";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";
import { useState } from 'react';

function App() {
    const [name, setName] = useState("");

    return (
    <div>
        <Context.Provider value={{ name, setName }}>
            <Navbar/>
            <FormWrapper/>
        </Context.Provider>
    </div>
    );
};

export default App;
