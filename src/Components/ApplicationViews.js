import React from "react";
import { Route } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage"
import { WeeklyView } from "./Schedules/WeeklyView";

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/homepage">
                <Homepage />
            </Route>
            <Route exact path="/week">
                <WeeklyView />
            </Route>
        </>
    )
}