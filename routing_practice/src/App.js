import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Params from './components/Params';

    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home/>} path="/home"/>

          <Route element={<Params/>} path="/:word"/>

          <Route element={<Params/>} path="/:word/:color/:bgColor"/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
    
export default App
