import Message from "./components/Message";
import Tabs from "./components/Tabs";
import './App.css';
import { useState } from "react";

function App() {
const tabsArray = [
  {label: "Tab 1", content: "Content from Tab 1 is showing"},
  {label: "Tab 2", content: "Content from Tab 2 is showing"},
  {label: "Tab 3", content: "Content from Tab 3 is showing"},
];

const [ allTabs, setAllTabs ] = useState(tabsArray);

const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
      <Tabs
      allTabs={allTabs}
      currentTabIndex={currentTabIndex}
      setCurrentTabIndex={setCurrentTabIndex} />
      
      <Message allTabs={allTabs} currentTabIndex={currentTabIndex} />
    </div>
  );
}

export default App;
