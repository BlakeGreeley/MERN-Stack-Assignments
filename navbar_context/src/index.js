import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";

function App() {
  return (
    <Wrapper>
      <Navbar>

      </Navbar>
      <FormWrapper/>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




