import React, { useEffect } from 'react';

import DisplayTech from '../components/techs/DisplayTech';

import { useDispatch, useSelector } from 'react-redux';
import { GetTechsAction } from '../actions/techActions';


const TechListModal = () => {

    const dispatch = useDispatch();

    const TechReducer = useSelector( (state) => state.TechReducer);
    const { techs, loading } = TechReducer


    useEffect(() => {
        dispatch(GetTechsAction())
         // eslint-disable-next-line
    }, [])



    return (
        <div id="tech-list-modal" className="modal" >
            <div className='modal-content'>
                <h4>Technician List</h4>
                <ul className='collection'>
                    {
                        !loading && techs !== null && techs.map( (item) => ( 
                            <DisplayTech techData={item} key={item.id} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default TechListModal;
