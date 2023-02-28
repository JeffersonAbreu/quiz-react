import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Button from './Button';

import Category from '../img/category.svg';

import './PickCategory.css';

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>Prepare-se para responder sobre uma das linguagens abaixo:</p>
      <div id="btns">
        {quizState.questions.map((question) => (
          <div className="btncat" key={question.category}>
            <Button
              key={question.category}
              text={question.category}
              action={(e) => chooseCategoryAndReorderQuestions(question.category)}
            />
          </div>
        ))}
      </div>
      <img src={Category} alt="categorias" />
    </div>
  )
}

export default PickCategory