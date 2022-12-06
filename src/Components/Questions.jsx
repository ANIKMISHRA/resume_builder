// Packages
import React, {useEffect, useContext} from "react";

// Components
import Question from "./Question";
import AppContext from "../Context";
import Resume from "./Resume";

// Material ui components
import { LinearProgress, Typography, Box } from "@mui/material";

// Material ui styles
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles ((theme) => ({
    root: { 
        display: "flex",
        alignitems: "center",
        justifyContent: "center",
        minHeight: "80vh",
    },
    progressBar: {
        margin: "1rem",
    },
    question: {
         display: "flex",
         alignitems: "center",
         justifyContent: "center",
         minHeight: "80vh",
    },
    question: {},
}));


const LinearProgressWithLabel = (props) => {
    return (
        <Box display="flex" alignitems="center" >
           <Box width="100%" mr={1} >
              <LinearProgress variant="determinate" {...props} />
           </Box>
           <Box minWidth={35} ></Box>
              <Typography variant="body2" color="textSecondary">{`${Math.round(
                props.value
              )}%`}

              </Typography>
        </Box>
    );
}

const Questions = () => {
    const classes = useStyles();

    const [progress, setProgress] = React.useState(0);

    const value = useContext(AppContext);

    let { questionAnswer, questions, answers } = value.state;

    useEffect(() => {
        setProgress(
            (answers.length / questions.length) * 100 
            ? (answers.length / questions.length) * 100 
            : 0
        )
    }, [answers]);

    return (
        <div>
            {questions.length !== answers.length ? (
                <LinearProgressWithLabel 
                 value={progress}
                 className={classes.progressBar}
                />
            ): null}
            <div className={classes.root}>
                {questions.length === answers.length ? (
                    <Resume />
                ) : (
                    <div className={classes.question}>
                        <Question question={questionAnswer.question} />
                    </div>
                )}
            </div>
        </div>
    );
}
export default Questions;