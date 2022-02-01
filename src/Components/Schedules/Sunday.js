import react, { useEffect, useState } from "react";
import { allUserExerciseDetails, getAllEx } from "../ApiManager";

export const Sunday = () => {
    const [obj, setDay] = useState([])
    const [exercises, setEx] = useState([])

    useEffect(
        () => {
            getAllEx()
                .then(res => res.json())
                .then((x) => {
                    setEx(x)
                })
        }, []
    )
    useEffect(
        () => {
            allUserExerciseDetails(parseInt(localStorage.getItem("fitness-user")))
                .then(res => res.json())
                .then((data) => {
                    setDay(data.filter(x=> x.day.id === 1))
                })
            },[])

    return(
        <>
            <div>
                <h1>Sunday!</h1>
            </div>
            <div>
                {
                obj.length>0 
                ? "" 
                : <h2>Please select an exercise to begin!</h2>

            }
            </div>
            <div>
                {obj.map((x) => {
                    return <p key={`key--{x.exercise.id}`}>{x.exercise.name}</p>
                }
                )}
            </div>
        </>
    )

}
