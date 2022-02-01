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
                .then(response => response.json())
                .then((data) => {
                    setEx(data)
                })
        },
        []
    )

    const returnBttn = () => {
        history.push("/exlist")
    }
    return(
        <>
            <h2>{ex.name}</h2>
            <p>{ex.howTo}</p>
            <p>{ex.imageURL}</p>
        <button className="bttn" onClick={returnBttn}>Return to list</button>
        </>
    )
}
