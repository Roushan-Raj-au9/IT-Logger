import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GetTechsAction } from '../../actions/techActions';

const TechSelectOptions = () => {

    const dispatch = useDispatch();

    const TechReducer = useSelector( (state) => state.TechReducer);
    const { techs, loading } = TechReducer

    useEffect( () => {
        dispatch(GetTechsAction())

        //eslint-disable-next-line
    }, [])

    return (
        !loading && techs !== null && techs.map( (item) => (
            <option value={`${item.firstName} ${item.lastName}`} key={item.id} >
                {item.firstName} {item.lastName}
            </option>
        ))
    )
}

export default TechSelectOptions
