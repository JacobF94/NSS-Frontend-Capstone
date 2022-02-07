import React from "react";
import { Route } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage"
import { WeeklyView } from "./Schedules/WeeklyView";
import { ExerciseList } from "./Exercises/ExerciseList";
import { ExDetails } from "./Exercises/ExerciseDetails";
import { Day } from "./Schedules/Day"
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/homepage">
                <Homepage />
            </Route>
            <Route exact path="/week">
                <WeeklyView />
            </Route>
            <Route exath path="/exlist">
                <ExerciseList />
            </Route>
            <Route exact path="/exdetails/:exId(\d+)">
                <ExDetails />
            </Route>
            <Route path="/day/:dayId(\d+)">
                <Day />
            </Route>
            <Route exact path="/">
                <Homepage />
            </Route>
        </>
    )
}