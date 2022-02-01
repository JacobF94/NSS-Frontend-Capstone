import React from "react";
import { Route } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage"
import { WeeklyView } from "./Schedules/WeeklyView";
import { ExerciseList } from "./Exercises/ExerciseList";
import { ExDetails } from "./Exercises/ExerciseDetails";
import { Sunday } from "./Schedules/Sunday"
import { Monday } from "./Schedules/Monday"
import {  Tuesday } from "./Schedules/Tuesday"
import { Wednesday } from "./Schedules/Wednesday"
import { Thursday } from "./Schedules/Thursday"
import { Friday } from "./Schedules/Friday"
import { Saturday } from "./Schedules/Saturday"

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
            <Route exact path="/sunday">
                <Sunday />
            </Route>
            <Route exact path="/monday">
                <Monday />
            </Route>
            <Route exact path="/tuesday">
                <Tuesday />
            </Route>
            <Route exact path="/wednesday">
                <Wednesday />
            </Route>
            <Route exact path="/thursday">
                <Thursday />
            </Route>
            <Route exact path="/friday">
                <Friday />
            </Route>
            <Route exact path="/saturday">
                <Saturday />
            </Route>
        </>
    )
}