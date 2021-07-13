import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GetLogsAction } from '../actions/logActions';

import DisplayLogs from '../components/DisplayLogs';
import Preloader from '../components/Preloader';

const Logs = () => {

    const dispatch = useDispatch(); 

    const LogReducer = useSelector( (state) => state.LogReducer)
    const { logs, loading } = LogReducer


    useEffect( () => {
        dispatch(GetLogsAction())

       //eslint-disable-next-line 
    }, [dispatch])


    if(loading || logs === null){
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header" >
                <h4 className="center" >
                    System Logs
                </h4>
            </li>
            {
                // !loading && logs.length === 0 ? 
                !loading && logs.length === 0 ? 
                    (
                        <p className="center" >No logs to show...</p>
                    )
                : 
                (
                    logs.map( (item) => (
                        <DisplayLogs logData={ item } key={item.id} />
                    ))
                )
            }
        </ul>
    )
}

export default Logs;
