import react, { useState, useEffect } from "react";
import "./WeeklyView.css";
import { allUserExerciseDetails } from "../ApiManager";
import { Link } from "react-router-dom";

export const WeeklyView = () => {
    const [sunday, setSunday] = useState([])
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday] = useState([])
    const [thursday, setThursday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])

    useEffect(
        () => {
            allUserExerciseDetails(parseInt(localStorage.getItem("fitness-user")))
                .then((data) => {
                    setSunday(data.filter(x => x.day.id === 1));
                    setMonday(data.filter(x => x.day.id === 2));
                    setTuesday(data.filter(x => x.day.id === 3));
                    setWednesday(data.filter(x => x.day.id === 4));
                    setThursday(data.filter(x => x.day.id === 5));
                    setFriday(data.filter(x => x.day.id === 6));
                    setSaturday(data.filter(x => x.day.id === 7));
                })
        }, []
    )

        return (
            <>
                <div className="all-content">
                    <div className="single-day">
                    <h1><Link to={`/day/1`}>Sunday</Link></h1>
                        {sunday.map((x) => {
                            return <p key={`day--${x.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1><Link to={`/day/2`}>Monday</Link></h1>
                        {monday.map((x) => {
                            return <p key={`day--${x.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1><Link to={`/day/3`}>Tuesday</Link></h1>
                        {tuesday.map((x) => {
                            return <p key={`day--${x.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1><Link to={`/day/4`}>Wednesday</Link></h1>
                        {wednesday.map((x) => {
                            return <p key={`day--${x.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1><Link to={`/day/5`}>Thursday</Link></h1>
                        {thursday.map((x) => {
                            return <p key={`day--${x.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1><Link to={`/day/6`}>Friday</Link></h1>
                        {friday.map((x) => {
                            return <p key={`day--${x.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1><Link to={`/day/7`}>Saturday</Link></h1>
                        {saturday.map((x) => {
                            return <p key={`day--${x.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></p>
                        })}
                    </div>
                </div>
            </>
        )
}