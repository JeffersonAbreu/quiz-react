import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Option from "./Option";
import Button from "./Button";
import "./Question.css";

const Questian = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOpition = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option }
    });
  };

  return (
    <div id="question">
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOpition(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {!quizState.answerSelected && !quizState.help && (
        <>
          {currentQuestion.tip &&
            <Button action={() => dispatch({ type: "SHOW_TIP" })} text={"Dica"} id={"Dica"} />
          }
          <Button
            text={"Excluir uma opção"}
            action={() => dispatch({type: "REMOVE_OPTION"})}
          />
        </>
      )}
      {!quizState.answerSelected && quizState.help === 'tip' &&
        <p>{currentQuestion.tip}</p>
      }
      {quizState.answerSelected && (
        <Button id={"continue"} text={"Continuar"} action={(e) => dispatch({ type: "CHANGE_QUESTION" })}/>
      )}
    </div>
  )
}

export default Questian;