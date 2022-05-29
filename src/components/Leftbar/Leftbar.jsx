import Leftbarcard from "../Leftbarcard/Leftbarcard";
import "./leftbar.css";
import _ from "lodash";
import { useEffect, useState } from "react";


function Leftbar(props){
    const [randomTen, setRandomTen] = useState([]);
    // console.log(props);
  
    useEffect(()=>{
        setRandomTen(_.sampleSize(props.quizData, 10));
        // console.log(_.sampleSize(props.quizData, 10));
    },[props.quizData])

    return(
        <div className="leftbar">
            <div className="leftbarWrapper">
                {randomTen.map((quiz,index) => {
                    return(
                        <Leftbarcard
                            quiz={quiz}
                            qNo={index}
                            key1={quiz._id}
                            setCurrentQId={props.setCurrentQId}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Leftbar;