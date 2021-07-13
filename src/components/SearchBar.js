import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { SearchLogsAction } from '../actions/logActions';

const SearchBar = () => {

    const text = useRef('')

    const dispatch = useDispatch();


    const changeHandler = (e) => {
        dispatch(SearchLogsAction(text.current.value))
    }

    return (
        <nav style={{ marginBottom: "30px" }} className="blue" >
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input 
                         id="search" 
                         type="search"  
                         placeholder="Search Logs..."
                         ref= {text}
                         onChange={ changeHandler }
                        />
                        <label className="label-icon" htmlFor="search">
                            <i className="material-icons">
                                search
                            </i>
                        </label>
                        <i className="material-icons">
                            close
                        </i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar;
