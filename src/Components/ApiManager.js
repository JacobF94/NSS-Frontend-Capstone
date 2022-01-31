const fetchPostOptions = (x) => {return{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(x)}
}

const fetchPutOptions = (x) => {return{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(x)
}}

export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`)
}

export const allUserExerciseDetails = (id) => {
    return fetch(`http://localhost:8088/userExercises?_expand=user&_expand=day&_expand=exercise&userId=${id}`)
}