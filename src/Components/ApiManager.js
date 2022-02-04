const fetchPostOptions = (x) => {return{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(x)}
}

export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())

}

export const allUserExerciseDetails = (id) => {
    return fetch(`http://localhost:8088/userExercises?_expand=user&_expand=day&_expand=exercise&userId=${id}`)
    .then(res => res.json())

}

export const getAllEx = () => {
    return fetch(`http://localhost:8088/exercises`)
    .then(res => res.json())

}

export const getSingleEx = (id) => {
    return fetch(`http://localhost:8088/exercises/${id}`)
    .then(res => res.json())

}

export const getUserDayEx = (x,y) => {
    return fetch(`http://localhost:8088/userExercises?userId=${x}&dayId=${y}&_expand=user&_expand=exercise&_expand=day`)
        .then(res => res.json())
}

export const deleteExercise = (id) => {
    return fetch(`http://localhost:8088/userExercises/${id}`, {
        method: "DELETE"
    })
}

export const addNewExercise = (data) => {
    return fetch(`http://localhost:8088/userExercises`, fetchPostOptions(data))
}

export const getUserDayNotes = (x,y) => {
    return fetch(`http://localhost:8088/notes?userId=${x}&dayId=${y}&_expand=user&_expand=day`)
        .then(res => res.json())
}

export const addNewNote = (data) => {
    return fetch(`http://localhost:8088/notes`, fetchPostOptions(data))
}

export const deleteNote = (id) => {
    return fetch(`http://localhost:8088/notes/${id}`, {
        method: "DELETE"
    })
}