import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Welldone from "../img/welldone.svg"
import Button from "./Button";
import "./GameOver.css"

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="gameover">
            <h2>Game Over</h2>
            <p>Acertou: {((quizState.score / quizState.questions.length)*100).toFixed(1)}%</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src={Welldone} alt="Fim do Quiz" />
            <Button text="Reiniciar" action={(e) => dispatch({ type: "NEW_GAME" })} />
        </div>
    )
}

export default GameOver;