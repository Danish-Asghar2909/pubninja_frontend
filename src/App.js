import logo from './logo.svg';
import './App.css';
import Quiz from './component/quiz';
import { useState } from 'react';
function App() {
  const [ showQuiz , setShowQuiz ] = useState(false)
  const handleStartQuiz =()=>{
    setShowQuiz(!showQuiz)
  }
  return (
    <div className="App">
      {showQuiz ? <Quiz/> : <button onClick={handleStartQuiz}>Start Quiz</button>}
      
    </div>
  );
}

export default App;
