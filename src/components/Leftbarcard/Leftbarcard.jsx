import "./leftbarcard.css";

function Leftbarcard(props){

    // console.log(props);
    

    const handleLeftCardClick = () =>{
        props.setCurrentQId(props.quiz._id);
    }

    return(
        <div className="leftbarcard" key={props.key1}>
            <div className="leftbarcardWrapper" onClick={handleLeftCardClick}>
                <div className="leftbarcardQno">
                    <span>Q.{props.qNo + 1}</span>
                </div>
                <div className="leftbarcardQ">
                    <span>{props.quiz.question}</span>
                </div>
            </div>
        </div>
    )
}

export default Leftbarcard;