import react, { useState, useEffect } from "react";
import "./WeeklyView.css";
import { allUserExerciseDetails } from "../ApiManager";

export const WeeklyView = () => {
    const [userDetails, setDetails] = useState([])
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
                    setDetails(data)
                })
        }, []
    )

    return (
        <>
            <div className="all-content">
                {userDetails.map(
                    (day) => {
                        return <div className="single-day" key={`day--${day.id}`}>
                            <h2>{day.day.day}</h2>
                            <p>{day.exercise.name}</p>
                        </div>
                    }
                )}
            </div>
        </>
    )
}