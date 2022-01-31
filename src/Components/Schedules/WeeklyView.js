import react, { useState, useEffect } from "react";
import "./WeeklyView.css";
import { allUserExerciseDetails } from "../ApiManager";

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
                .then(res => res.json())
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
                    <h1>Sunday</h1>
                        {sunday.map((x) => {
                            return <p key={`day--${x.id}`}>{x.exercise.name}</p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1>Monday</h1>
                        {monday.map((x) => {
                            return <p key={`day--${x.id}`}>{x.exercise.name}</p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1>Tuesday</h1>
                        {tuesday.map((x) => {
                            return <p key={`day--${x.id}`}>{x.exercise.name}</p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1>Wednesday</h1>
                        {wednesday.map((x) => {
                            return <p key={`day--${x.id}`}>{x.exercise.name}</p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1>Thursday</h1>
                        {thursday.map((x) => {
                            return <p key={`day--${x.id}`}>{x.exercise.name}</p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1>Friday</h1>
                        {friday.map((x) => {
                            return <p key={`day--${x.id}`}>{x.exercise.name}</p>
                        })}
                    </div>
                    <div className="single-day">
                    <h1>Saturday</h1>
                        {saturday.map((x) => {
                            return <p key={`day--${x.id}`}>{x.exercise.name}</p>
                        })}
                    </div>
                </div>
            </>
        )
}