import react, { useState } from "react"
import { Link } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"
import { getUserDayEx } from "../ApiManager"
import "./Homepage.css"

export const Homepage = () => {
    const [userCurrentDayDetails, setUserCurrentDay] = useState([])
    const [todayId, setTodayId] = useState(0)

    const week = [, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    useEffect(()=>{
        const tempDate = new Date();
        const currentDay = (tempDate.getDay()) + 1
        return setTodayId(currentDay)
    }, [])

    useEffect(()=>{
        getUserDayEx(localStorage.getItem("fitness-user"), todayId)
            .then((data) => {
                return setUserCurrentDay(data)
            })
    }, [todayId])

    return (
        <>
            <h1 className="homepage_greeting">
                Welcome to Daily Fitness!
            </h1>
            <div className="homepage_body">
                <div className="homepage_today">
                        <div>Schedule for {week[todayId]}!</div>
                        <ul>
                            {userCurrentDayDetails.map((data) => {
                                return <li className="exercise_detail" key={`ex--${data.id}`}><Link to={`/exdetails/${data.exercise.id}`}>{data.exercise.name}</Link></li>
                            })}
                        </ul>
                </div>
                <div className="homepage_week">
                    <Link to="day/1">
                        <button>Sunday</button>
                    </Link>
                    <Link to="day/2">
                        <button>Monday</button>
                        </Link>
                    <Link to="day/3">
                        <button>Tuesday</button>
                    </Link>
                    <Link to="day/4">
                        <button>Wednesday</button>
                    </Link>
                        <Link to="day/5">
                        <button>Thursday</button>
                    </Link>
                        <Link to="day/6">
                        <button>Friday</button>
                    </Link>
                        <Link to="day/7">
                        <button>Saturday</button>
                    </Link>
                </div>
            </div>
        </>
    )
}  