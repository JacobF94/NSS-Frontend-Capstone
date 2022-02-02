import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllEx } from "../ApiManager";
import "./ExerciseList.css"

export const ExerciseList = () => {
    const [exlist, setList] = useState([])

    useEffect(() => {
        getAllEx()
            .then((data) => {
                setList(data)
            })
    }, [])
    return(
        <>
            <ul>
                {exlist.map((x) => {
                    return <li className="single-ex" key={`exercise--${x.id}`}><Link to={`/exdetails/${x.id}`}>{x.name}</Link> - {x.description}</li>
                })}
            </ul>
        </>
    )

}