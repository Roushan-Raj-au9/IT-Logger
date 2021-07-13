import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';


import { useDispatch } from 'react-redux';

import { DeleteLogAction, setCurrentAction } from '../actions/logActions';

const DisplayLogs = ({ logData }) => {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(DeleteLogAction(logData.id))

        M.toast({ html: 'Log Deleted' })
    }

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal"
                 className={`modal-trigger ${logData.attention ? 'red-text' : 'blue-text'}` }
                 onClick={ () => dispatch(setCurrentAction(logData)) }
                >
                    {logData.message}
                </a>
                <br />
                <span className="grey-text" >
                    <span className="black-text" >
                        ID #{ logData.id }
                    </span>{' '}
                    last updated by{' '}

                    <span className="black-text" >
                        { logData.tech }
                    </span>{' '}
                    on{' '}

                    <Moment format='MMMM Do YYYY, h:mm:ss a' >
                        { logData.date }
                    </Moment>
                </span>

                <a href="#!" onClick={ deleteHandler } className="secondary-content" >
                    <i className="material-icons grey-text" >
                        delete
                    </i>
                </a>
            </div>
        </li>
    )
}

DisplayLogs.propTypes = {
    logData: PropTypes.object.isRequired,
}

export default DisplayLogs;
