import { useEffect, useState } from "react";
import Leftbar from "../components/Leftbar/Leftbar";
import Middlebar from "../components/Middlebar/Middlebar";
import Topbar from "../components/Topbar/Topbar";
import axios from 'axios';
import "./home.css";

const Home = () =>{
    const [quizData, setQuizData] = useState([]);
    const [totalScore, setTotalScore] = useState(0);
    const [currentQId, setCurrentQId] = useState('');

    const getQuizData = async ()=>{
        const quizData1 = await axios.get(`http://localhost:3800/user/fetchAllQuiz`);
        // console.log(quizData1);
        setQuizData(quizData1.data.result);
    }

    useEffect(() => {
        getQuizData();
    }, []);

    // console.log(quizData);

    return(
        <div className="home">
            <Topbar/>
            <div className="homeBody">
                {quizData!== [] ? <Leftbar
                    quizData={quizData}
                    setCurrentQId={setCurrentQId}
                />: <></>}
                <Middlebar
                    quizData={quizData}
                    currentQId={currentQId}
                />
            </div>
        </div>
    )
}

export default Home;