import react from "react"
import "./Homepage.css"

export const Homepage = () => {
    return (
        <>
            <h1 className="homepage_greeting">
                Welcome to Daily Fitness!
            </h1>
            <div className="homepage_body">
                <div>
                    <p className="homepage_today">sample text left</p>
                </div>
                <div>
                    <p className="homepage_week">sample text right</p>
                </div>
            </div>
        </>
    )
}