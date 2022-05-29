import { useState } from "react";
import "./middlebar.css";

function Middlebar(props){

    const [correct, setCorrect] = useState('');
    const [explain, setExplain] = useState('');
    const [correctAns, setCorrectAns] = useState('');

    const findCorrectAns = (options) =>{
        for(let i = 0; i < options.length; i++){
            if(options[i].isAns){
                return options[i].option;
            }
        }
    }

    const handleOptionClick = (options, explanation, optionsAll)=>{
        if(options.isAns){
            setCorrect(true);
            setExplain(explanation);
            setCorrectAns(options.option);
        }else{
            setCorrect(false);
            setExplain(explanation);
            setCorrectAns(findCorrectAns(optionsAll));
        }
    }

    return(
        <div className="middlebar">
            <div className="middlebarWrapper">
                {props.quizData.map(quiz=>{
                    if(quiz._id === props.currentQId){
                        return(
                            <div className="middlebarCard">
                                <div className="middlebarCardLeft">
                                    <div className="middlebarCardLeftQno">Question</div>
                                    <div className="middlebarCardLeftQues">{quiz.question}</div>
                                </div>
                                <div className="middlebarCardRight">
                                    <div className="middlebarCardRightInner" onClick={()=>handleOptionClick(quiz.options[0], quiz.explanation, quiz.options)}>
                                        {quiz.options[0].option}
                                    </div>
                                    <div className="middlebarCardRightInner" onClick={()=>handleOptionClick(quiz.options[1], quiz.explanation, quiz.options)}>
                                        {quiz.options[1].option}
                                    </div>
                                    <div className="middlebarCardRightInner" onClick={()=>handleOptionClick(quiz.options[2], quiz.explanation, quiz.options)}>
                                        {quiz.options[2].option}
                                    </div>
                                    <div className="middlebarCardRightInner" onClick={()=>handleOptionClick(quiz.options[3], quiz.explanation, quiz.options)}>
                                        {quiz.options[3].option}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
                {props.currentQId === ""? <div className="middlebarCard">
                    <h1>Please Select a Question</h1>
                </div>: <></>}
                <div className="middlebarOutcome">
                    {correct==="" ? <div className="middlebarOutcomeType ">
                        Choose Your Answer
                    </div> : correct===true ? <div className="middlebarOutcomeType ">
                        Correct Answer
                    </div> : <div className="middlebarOutcomeType Incorrect">
                        Incorrect Answer
                    </div> }
                    <div>
                        {correct === false ?`Correct Ans Is:`: ``} {correctAns}
                    </div>
                    <div className="middlebarOutcomeExplain">
                        {explain}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middlebar;