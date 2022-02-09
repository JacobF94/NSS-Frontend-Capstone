import react, { useEffect, useState } from "react";
import { addNewExercise, addNewNote, deleteExercise, getAllEx, getUserDayEx, getUserDayNotes, deleteNote } from "../ApiManager";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Weekday.css"

export const Day = () => {
    const [userDayExercises, setUserDayExercises] = useState([])
    const [unusedExercises, setUnusedEx] = useState([])
    const [notes, setNotes] = useState([])
    const [noteButton, toggleNoteButton] = useState(true)
    const [noteForm, toggleNoteForm] = useState(false)
    const [createdNote, setCreatedNote] = useState({
        note: "",
        userId: localStorage.getItem("fitness-user"),
        dayId: useParams()
    })

    const {dayId} = useParams()
    const week = [, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const doNotesFetch = () => {
        getUserDayNotes(localStorage.getItem("fitness-user"), dayId)
            .then((data) => {
                setNotes(data)})
    }

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
                // This useEffect is fetching the entire list of exercises, then fitlering it into the tempArray.
                // tempArray is being filled by finding the exercises that match between the total list and the user list, 
                // and returning the inverse of that by using a bang operator
                const tempArray = data.filter((x) => {
                    const foundExercise = userDayExercises.find((exercise) => {
                        return exercise.exerciseId === x.id
                    })
                    return !foundExercise
                })
                setUnusedEx(tempArray)
            })
    }, [userDayExercises])

    const DeleteButton = (id) => {
        deleteExercise(id)
            .then(() => doCurrentFetch())
    }
    
    const DeleteNoteButton = (id) => {
        deleteNote(id)
            .then(() => doNotesFetch())
    }

    const createNewEntry = (x) => {
        const newExercise = {
            userId: parseInt(localStorage.getItem("fitness-user")),
            exerciseId: parseInt(x.target.value),
            dayId: parseInt(dayId),
        }
        addNewExercise(newExercise)
            .then(() => doCurrentFetch())
    }

    useEffect(()=>{
        doNotesFetch()
    }, [])

    const newNoteButton = () => {
        toggleNoteButton(false);
        toggleNoteForm(true)
    }

    const saveNote = () => {
        const newNote = {
            note: createdNote.note,
            userId: parseInt(localStorage.getItem("fitness-user")),
            dayId: parseInt(dayId)
        }
        addNewNote(newNote)
        .then(() => {
            toggleNoteButton(true)
            toggleNoteForm(false)
            return doNotesFetch()})
    }

    return(
        <>
            <div>
                <h1 className="Day">{week[dayId]}</h1>
            </div>
            <div>
                {
                userDayExercises.length>0 
                ? "" 
                : <h2>Please select an exercise to begin!</h2>
            }
            </div>
            <div className="content-container">
                <div className="content-left">
                    <div>
                        <label htmlFor="exercise">Add an exercise</label>
                        <select name="exercise" id="exId" defaultValue={[0]} onChange={createNewEntry}>
                            <option selected>Select your exercise</option>
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
                    </div>
                    <div className="content-right">
                        <div className="notes-container">
                            <ul>
                            {notes.map((x) => {
                                return <div>
                                    <li className="note" key={`note--${x.id}`}>{x.note}</li>
                                    <button onClick={() => {DeleteNoteButton(x.id)}}>Delete Note</button>
                                    </div>
                                })}
                            </ul>
                        </div>
                        <div>
                            {noteButton === true?
                                <button onClick={newNoteButton}>Make a new note!</button>
                                : ""}
                        </div>
                        <div>
                            {noteForm === true?
                                <div>
                                    <label htmlFor="note"></label>
                                        <input
                                            required autoFocus
                                            type="text" id="note"
                                            className="note-box"
                                            placeholder="Note"
                                            onChange={
                                                (event) => {
                                                    const copy = {...createdNote}
                                                    copy.note = event.target.value
                                                    setCreatedNote(copy)
                                                }}
                                    />
                                    <button className="submit-button" onClick={saveNote}>
                                        Save Note
                                    </button>
                                </div>
                            :""}
                        </div>
                    </div>
            </div>
        </>
    )
}
