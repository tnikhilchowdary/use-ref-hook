import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const timeRef = useRef(null);


  const onStartClick = () => {
    if(timeRef.current) return;
    timeRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, 100)
  };

  const onStopClick = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setCount(0);
    };

  return (
    <div className="App">
      <p>Count - {count}</p>
      <button onClick={onStartClick}>Start</button>
      <button onClick={onStopClick}>Stop</button>
    </div>
  );
}

export default App;
