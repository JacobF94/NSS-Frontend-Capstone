import react, { useEffect, useState } from "react";
import { addNewExercise, deleteExercise, getAllEx, getUserDayEx } from "../ApiManager";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Day = () => {
    const [userDayExercises, setUserDayExercises] = useState([])
    const [unusedExercises, setUnusedEx] = useState([])
    const {dayId} = useParams()

    const doCurrentFetch = () => {
        getUserDayEx(localStorage.getItem("fitness-user"), dayId)
            .then((data) => {
                setUserDayExercises(data)
            })
    }

    useEffect(() => {
        doCurrentFetch()
    }, [])

    useEffect(() => {
        getAllEx()
            .then((data) => {
                const tempArray = data.filter((x) => {
                    const availableExercises = userDayExercises.filter((exercise) => {
                        return exercise.exerciseId !== x.id
                    })
                    return availableExercises.length === userDayExercises.length
                })
                setUnusedEx(tempArray)
            })
    }, [userDayExercises])

    const DeleteButton = (id) => {
        deleteExercise(id)
            .then(() => doCurrentFetch())
    }
    
    const createNewEntry = (x) => {
        const newExercise = {
            userId: parseInt(localStorage.getItem("fitness-user")),
            exerciseId: x.target.value,
            dayId: parseInt(dayId),
        }
        addNewExercise(newExercise)
            .then(() => doCurrentFetch())
    }

    return(
        <>
            <div>
                <h1>{dayId}</h1>
            </div>
            <div>
                {
                userDayExercises.length>0 
                ? "" 
                : <h2>Please select an exercise to begin!</h2>
            }
            </div>
            <div>
                <label htmlFor="exercise">Add an exercise</label>
                <select name="exercise" id="exId" onChange={createNewEntry}>
                    {unusedExercises.map((x) => {
                        return <option key={x.id} value={x.id}>{x.name}</option>
                    })}
                </select>
            </div>
            <div>
                <ul>
                {userDayExercises.map((x) => {
                    return <div>
                        <li key={`key--{x.exercise.id}`}><Link to={`/exdetails/${x.exercise.id}`}>{x.exercise.name}</Link></li>
                        <button onClick={() => {DeleteButton(x.id)}}>
                                            Delete  
                                    </button>
                    </div>
                }
                )}
                </ul>
            </div>
        </>
    )
}
