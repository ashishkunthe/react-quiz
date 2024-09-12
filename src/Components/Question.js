import Options from "./Options";

function Question({ question, index, answer, dispatch, points }) {
  return (
    <div>
      <h3>{question.question}</h3>
      <Options
        question={question}
        answer={answer}
        dispatch={dispatch}
        points={points}
      />
    </div>
  );
}

export default Question;
