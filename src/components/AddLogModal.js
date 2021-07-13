import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import { useDispatch } from 'react-redux';

import { AddLogAction } from '../actions/logActions';

import TechSelectOptions from './techs/TechSelectOptions';

const AddLogModal = () => {

    const dispatch = useDispatch();

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('')

    const submitHandler = () => {
        if(message === '' || tech === ''){
            M.toast({ html: 'Please enter a message and tech' })
        }
        else{
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            dispatch(AddLogAction(newLog))

            M.toast({ html: `Log added by ${tech}` });

            //clear fields
            setMessage('')
            setAttention(false)
            setTech('')
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content" >
                <h4>Enter System Log</h4>
                <div className="row" >
                    <div className="input-field" >
                        <input 
                         type='text' 
                         name="message"
                         value={message}
                         onChange={ (e) => setMessage(e.target.value) }
                        />
                        <label htmlFor="message" className="active" >
                            Log Message
                        </label>
                    </div>
                </div>

                <div className="row" >
                    <div className="input-field" >
                        <select className="browser-default"
                         name="tech"
                         value={tech}
                         onChange={ (e) => setTech(e.target.value)}
                        >
                            <option value='' disabled >Select Technician</option>
                            <TechSelectOptions /> 
                        </select>
                    </div>
                </div>

                <div className="row" >
                    <div className="input-field" >
                        <label>
                            <input 
                             type="checkbox" 
                             className="filled-in" 
                             checked={attention}
                             value={attention}
                             onChange={ (e) => setAttention(!attention) }
                            />
                            <span>Need Attention</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="modal-footer" >
                <a
                 href="#!"
                 onClick={ submitHandler }
                 className="modal-close waves-effect blue waves-light btn"
                >
                    Enter
                </a>
            </div>
        </div>
    )
}


const modalStyle ={
    width: '75%',
    height: '75%'
}

export default AddLogModal;
