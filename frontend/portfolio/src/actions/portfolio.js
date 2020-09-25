import axios from "axios";
import { GET_PROJECTS, GET_PROJECT, GET_SKILLS, GET_DEVELOPER } from "./types";

//GET PROJECTS
export const getProjects = () => (dispatch) => {
    axios
        .get(`${process.env.REACT_APP_DOMAIN_NAME_API}/projects`)
        .then(res => {
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("ERRROR ", err)
            // dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
            // const errors = {
            //     msg: err.response.data,
            //     status: err.response.status
            // }

            // dispatch({
            //     type: GET_ERRORS,
            //     payload: errors
            // }) 
        })
}

//GET PROJECTS
export const getProject = (id) => (dispatch) => {
    axios
        .get(`${process.env.REACT_APP_DOMAIN_NAME_API}/project/${id}`)
        .then(res => {
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("ERRROR ", err)
            // dispatch(createMessage({unknownError: "Ooops, Something went wrong. Are you online?"}))
            // const errors = {
            //     msg: err.response.data,
            //     status: err.response.status
            // }

            // dispatch({
            //     type: GET_ERRORS,
            //     payload: errors
            // }) 
        })
}

//GET SERVICES
export const getSkills = () => (dispatch) => {
    axios
        .get(`${process.env.REACT_APP_DOMAIN_NAME_API}/skills`)
        .then(res => {
            dispatch({
                type: GET_SKILLS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
}

export const getDeveloper = () => (dispatch) => {
    axios
        .get(`${process.env.REACT_APP_DOMAIN_NAME_API}/developer`)
        .then(res => {
            dispatch({
                type: GET_DEVELOPER,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
}