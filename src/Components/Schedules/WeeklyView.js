import react, { useState, useEffect } from "react";
import "./WeeklyView.css";
import { allUserExerciseDetails } from "../ApiManager";

export const WeeklyView = () => {
    const [allUserDays, setUserDays] = useState([])
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
                    setUserDays(data);
                    setSunday(data.filter(data.day.id === 1))
                })
        }, []
    )

        return (
            <>
                    {sunday?.map((day) => {
                        return <p>{day.exercise.name}</p>
                    })}
            </>
        )
//     return (
//         <>
//             <div className="all-content">
//                 {allUserDays.map(
//                     (day) => {
//                         return <div className="single-day" key={`day--${day.id}`}>
//                             <h2>{day.day.day}</h2>
//                             <p>{day.exercise.name}</p>
//                         </div>
//                     }
//                 )}
//             </div>
//         </>
//     )
}