# Daily Fitness -- Jacob Frensley's NSS Frontend Capstone

## Introduction
This project was the culmination of what I learned during the first half of my time at the Nashville Software SChool, cohort 53. 

## Purpose & Motivation
I wanted to create an application that would allow users to track and schedule daily exercises because health and wellness is something I already care about and have a background in. When I decided to learn programming and moved to working from home i realized daily exercise was the one thing that I knew I would have to conscientiously keep up with on a daily basis, and this seemed like a great idea for my capstone project. Of course, the main purpose of this app is to showcase what I have learned about using React in conjunction with JS and CSS to create interactive applications.

## How does this application work?
I used the React library to set and modify states for each page, using `fetch` calls to retrieve the correct data from the database for that state. This state is rendered on the DOM through JSX representation. React functions such as `Link` `Route` and `Redirect` allow the user to navigate through the different modules that are all being displayed via `ApplicationViews.js` and `DailyFitness.js`.

## How to install and run
After cloning this repository as well as the associated API I have in a sepaarate repository on my github account, to run this app:
1. In the root of the API directory, use Json server to serve the database
2. In the root of the daily fitness directory, run `npm start`
3. Either log in using one of the premade users in the database, or register your own account


## Difficulties and challenges experienced while making this app
The main challenge I faceed when making this project was coordinating my different sets of data on modules that accessed more than one piece of data from the database, while having the code be as concise and condensed as possible. Making the single day edit page as just one module that conditionally rendered the day of the week was also a learning process for this data coordination, but was a great learning experience.