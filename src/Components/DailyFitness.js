import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews.js";
import { Login } from "./auth/Login.js";
import { Register } from "./auth/Register.js";
import { NavBar } from "./nav/NavBar.js";

export const DailyFitness = () => {
    return (
        <>
            <Route
                render={() => {
                    if (localStorage.getItem("fitness-user")) {
                        return (
                            <>
                                <NavBar />
                                <ApplicationViews />
                            </>
                        );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </>
    );
};