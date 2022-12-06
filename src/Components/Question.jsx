// Packages
import React, { useContext } from "react";

// Material ui components
import { Button, TextField } from "@mui/material";

// Material ui styles
import { makeStyles } from "@material-ui/core/styles";

// Material ui icon
import { ArrowRight } from "@mui/icons-material";

// Context
import AppContext from "../Context";


const useStyles = makeStyles ((theme) => ({
    buttonContainer: {
        display: "block",
        marginTop: "1rem",
    },
    button: {
        background: "white",
    },
}));

const Question = () => {

    const classes = useStyles();
    const value = useContext(AppContext);

    let { questionAnswer } = value.state;
    let { handleChangeInput, nextQuestion } = value.function;

    return (
        <div>
            <form noValidate autoComplete="on" onSubmit={nextQuestion}>
                <TextField 
                  id="standard-basic"
                  label={questionAnswer.question}
                  name={questionAnswer.resumeFieldId}
                  value={questionAnswer.answer ? questionAnswer.answer : "" }
                  onChange={handleChangeInput}
                />
                <div className={classes.buttonContainer}>
                    <Button 
                      type="submit"
                      variant="contained"
                      className={classes.button}
                      endIcon={<ArrowRight />}
                    >
                        Next
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default Question;