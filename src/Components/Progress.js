import { useQuiz } from "../Context/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        questions{" "}
        <strong>
          {index + 1}/{numQuestions}
        </strong>
      </p>
      <p>
        Points{points}/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
