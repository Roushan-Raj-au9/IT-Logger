import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types';

export const GetLogsAction = () => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        })
    } 
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}


export const AddLogAction = (log) => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        })
    } 
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}


export const DeleteLogAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })

        await fetch(`/logs/${id}`, {
            method: 'DELETE',
        });
        
        dispatch({
            type: DELETE_LOG,
            payload: id
        })
    } 
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}



export const UpdateLogAction = (log) => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        
        dispatch({
            type: UPDATE_LOG,
            payload: data
        })
    } 
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}


//Serach Logs 
export const SearchLogsAction = (text) => async (dispatch) => {
    try {
        dispatch({ type: SET_LOADING })

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        })
    } 
    catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.statusText
        })
    }
}



//Set current log Details prefilled
export const setCurrentAction = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}


//Clear current log 
export const ClearCurrentAction = () => {
    return {
        type: CLEAR_CURRENT,
    }
}