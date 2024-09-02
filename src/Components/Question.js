import Options from "./Options";

function Question({ question, index, answer, dispatch }) {
  console.log(question);
  return (
    <div>
      <h3>{question.question}</h3>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
