import { GET_PROJECTS, GET_PROJECT, GET_SKILLS, GET_DEVELOPER } from "../actions/types";


const initialState = {
    projects: [],
    currentProject: null,
    skills: [],
    developer: [],
}


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case GET_PROJECT:
            return {
                ...state,
                currentProject: action.payload
            }
        case GET_SKILLS:
            return {
                ...state,
                skills: action.payload
            }
        case GET_DEVELOPER:
            return {
                ...state,
                developer: action.payload
            }
        default:
            return state
    }
}