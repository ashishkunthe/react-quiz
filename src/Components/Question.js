import Options from "./Options";

function Question({ question, index, answer, dispatch, points }) {
  console.log(question);
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
