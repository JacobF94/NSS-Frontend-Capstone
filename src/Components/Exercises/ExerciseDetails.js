import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getSingleEx } from "../ApiManager";

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
            <h2>{ex.name}</h2>
            <p>{ex.description}</p>
            <img src={`/images/${ex.imageURL}`} alt="exercise image" />
            <br />
        <button className="bttn" onClick={returnBttn}>Return to list</button>
        </>
    )
}
