import React, { useContext } from "react";
import { Context } from "../../App";
import Question from "../Questions/Question";
import AnswerOptions from "../AnswerOptions/AnswerOptions";
import QuestionCount from "../QuestionCount/QuestionCount";
import TranlationButton from "../TranslationButton/TranslationButton";
import { Button } from "reactstrap";
import "./QuestionContainer.scss";

const QuestionContainer = () => {
  const { handleNextQuestion, handleSubmitAnswers, anwserOptions, totalQuestion, counter, applyButton, instruction } = useContext(Context);

  const nextButton = <Button aria-controls="example-fade-text" style={{ width: "100%", margin: "1% auto", fontSize: "1.3em", backgroundColor: "#84123c", border: "none" }} onClick={handleNextQuestion} className="btn-submit">{applyButton}</Button>;
  const subButton = <Button aria-controls="example-fade-text" style={{ width: "100%", margin: "1% auto", fontSize: "1.3em", backgroundColor: "#84123c", border: "none" }} onClick={handleSubmitAnswers} className="btn-submit">{applyButton}</Button>;

  const renderAnswerOption = (data, index) => {
    return (
      <AnswerOptions
        key={index}
        index={index}
        anwserContent={data.content}
      />
    );
  };

  return (
    <>
      <TranlationButton />
      <p style={{ padding: "3em 0em 1em 0em", fontSize: "1.1em", color: "#3d2903" }}> {instruction}</p>
      <QuestionCount />
      <Question />
      <ul>{anwserOptions.map(renderAnswerOption)}</ul>

      <div style={{ textAlign: "right" }}>
        {counter < 0 || counter === totalQuestion - 1 ? (
          <span />
        ) : (
            nextButton
          )}
        {counter === totalQuestion - 1 ? subButton : <span />}
      </div>
    </>
  );
};
export default QuestionContainer;