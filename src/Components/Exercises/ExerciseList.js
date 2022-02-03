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

    const noWeights = () => {
        getAllEx()
            .then((data) => {
                setList(data.filter((x) => {
                   return x.freeweight === false
                }))
            })
    }

    const hasWeights = () => {
        getAllEx()
        .then((data) => {
            setList(data.filter((x) => {
               return x.freeweight === true
            }))
        })
    }

    const clearFilter = () => {
        getAllEx()
            .then((data) => {
                setList(data)
            })
    }

    return(
        <>
        <div>
            <button onClick={() => {noWeights()}}>No Weights?</button>
            <button onClick={() => {hasWeights()}}>Only Weights?</button>
            <button onClick={() => {clearFilter()}}>Clear Filter</button>
        </div>
            <ul>
                {exlist.map((x) => {
                    return <li className="single-ex" key={`exercise--${x.id}`}><Link to={`/exdetails/${x.id}`}>{x.name}</Link> - {x.description}</li>
                })}
            </ul>
        </>
    )

}