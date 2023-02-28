// react , compoenents, statics
import { useContext } from 'react';

import GameOver from './components/GameOver';
import PickCategory from './components/PickCategory';
import Questian from './components/Question';
import Welcome from './components/Welcome';
import { QuizContext } from './context/quiz';

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação!</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Questian />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
