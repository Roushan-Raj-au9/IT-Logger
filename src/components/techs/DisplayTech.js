import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { useDispatch } from 'react-redux';
import { DeleteTechAction } from '../../actions/techActions';

const DisplayTech = ({ techData: { id, firstName, lastName } }) => {

    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(DeleteTechAction(id))

        M.toast({ html: 'Technician Deleted' })

    }

    return (
        <li className='collection-item'>
            <div>
                {firstName} {lastName}
                <a href='#!' onClick={ deleteHandler } className='secondary-content' >
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

DisplayTech.propTypes = {
    techData: PropTypes.object.isRequired,
}

export default DisplayTech;
