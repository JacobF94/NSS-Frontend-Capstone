import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSingleEx } from "../ApiManager";
import "./ExerciseDetails.css"

export const ExDetails = () => {
    const [ex, setEx] = useState({})
    const { exId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            getSingleEx(exId)
                .then((data) => {
                    setEx(data)
                })
        },
        [exId]
    )

    const returnBttn = () => {
        history.push("/exlist")
    }
    return(
        <>
            <h1 className="ExName">{ex.name}</h1>
            <p className="ExDesc">{ex.description}</p>
            <img className="ExImg" src={`/images/${ex.imageURL}`} alt="exercise image" />
            <br />
        <button className="returnBttn" onClick={returnBttn}>Return to list</button>
        </>
    )
}
