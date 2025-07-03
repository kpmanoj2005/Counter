import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { useState } from 'react';

function App() {
  const [darkMode, SetDarkMode] = useState(false);
  const [showText, setShowText] = useState(true); 
  const [name,setName]=useState("");

  return (
    <div className={darkMode ? "container dark-mode" : "container"}>
      <h1>Click Counter App</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <p>Hello,{name?name:"user"}</p>
      
      <Counter />
      <button className="btn" onClick={() => SetDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <br/>

      <button className="btn" onClick={() => setShowText(!showText)}>
        {showText ? "Hide Text" : "Show Text"}
      </button>
      {showText && <h4>This is the text to show or hide.</h4>}

    </div>
  );
}

export default App;