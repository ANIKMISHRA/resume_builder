// Packages
import React from "react";

// Components
import AppContext from "./Context";
import questionsArray from "./Constants/questionArray";
import Questions from "./Components/Questions";

// Material ui component
import { Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {

    // States 
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [questionAnswer, setQuestionAnswer] = useState({});

    /**
     * Component Did Mount
     */
    useEffect(() => {
        setQuestions(questionsArray);
        setQuestionAnswer(questionsArray[0]);
    }, []);

    /**
     * Method to manage the input changes
     */
    let handleChangeInput = (e) => {
        setQuestionAnswer({
            ...questionAnswer,
            answer : e.target.value,
        });
    };

    /**
     * 
     */
    let nextQuestion = (e) => {
        e.preventDefault();
        questions.map((question) => {
            if (question.resumeFieldId === questionAnswer.resumeFieldId) {
                setAnswers([
                    ...answers,
                    {...question, answer: questionAnswer.answer },
                ]);
            }
        });

        questions.map((qa, index ) => {
            if (index <= questions.length) {
                if (qa.resumeFieldId === questionAnswer.resumeFieldId ) {
                    setQuestionAnswer(questions[index + 1])
                }
            }
        });
    };

    return (
        <AppContext.Provider
         value={{
            state: {
                questionAnswer,
                questions,
                answers,
            },
            function: {
                handleChangeInput: handleChangeInput,
                nextQuestion: nextQuestion,
            },
         }}
        >
          <div className="App">
            <Typography 
             variant="h6"
             style={{
               textAlign: "center",
               margin: "2rem",
             }}
            >
              Resume Builder
            </Typography>
            <Questions />
          </div>
        </AppContext.Provider>
    )
}
export default App;
