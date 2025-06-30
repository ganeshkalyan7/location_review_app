import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import axios from "axios";
import Questions from "./Questions";
import Progress from "./Progress";
import QuizEnd from "./QuizEnd";

const initialstate = {
  questions: [],
  //'loading' , 'error','ready' ,'active', 'finished'
  status: "loading",
  currentIndex: 0,
  newAnswer: null,
  points: 0,
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "dataresponse":
      return { ...state, questions: action.payload, status: "ready" };
    case "datafield":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions[state.currentIndex];
      console.log(question);
      return {
        ...state,
        newAnswer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuation":
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        // state.currentIndex === state.questions.length
        //   ? state.currentIndex + 1
        //   : (state.status = "finished"),
        newAnswer: null,
      };
    case "finished":
      return { ...state, status: "finished", newAnswer: null };

    case "restart":
      return { ...state, status: "active", currentIndex: 0 };
    default:
      throw new Error("Action not Found");
  }
}

function QuizMain() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  // state destructering
  const { questions, status, currentIndex, newAnswer, points } = state;

  const letsStart = () => {
    dispatch({ type: "startQuiz" });
  };

  const arrlength = questions.length;
  const maxPoints = questions.reduce((prev, curr) => prev + curr.points, 0);
  useEffect(() => {
    const DataFetch = async () => {
      try {
        // -----api using fetch function----
        // const response =await fetch("http://localhost:9000/questions")
        // const data =await response.json()
        // -------api using fetch function----
        const response = await axios.get("http://localhost:9000/questions");
        dispatch({ type: "dataresponse", payload: response.data });
        //console.log(data);
      } catch (err) {
        dispatch({ type: "datafield" });
      }
    };
    DataFetch();
  }, []);

  console.log(state);
  return (
    <div>
      <h1>React Quiz App</h1>

      {status === "loading" && (
        <div class="spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {status === "error" && (
        <span>there was error 🙉while fetching the data</span>
      )}
      {status === "ready" && (
        <StartScreen
          questionlen={arrlength}
          letsStart={letsStart}
          dispatch={dispatch}
        />
      )}
      {status === "active" && (
        <>
          <Progress
            index={currentIndex}
            questionlen={arrlength}
            points={points}
            totalPoints={maxPoints}
          />
          <Questions
            questions={questions[currentIndex]}
            dispatch={dispatch}
            answer={newAnswer}
            currentIndex={currentIndex}
            questionlen={arrlength}
          />
        </>
      )}

      {status === "finished" && (
        <QuizEnd points={points} totalPoints={maxPoints} dispatch={dispatch} />
      )}
    </div>
  );
}

export default QuizMain;
