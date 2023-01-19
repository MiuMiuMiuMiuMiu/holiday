import React from 'react';
import Holidays from '../components/Holidays.js';
import {useLocation} from 'react-router-dom';

function Country() {

    const location = useLocation();
    let code = location.state.countryCode;
    return (
        <div>
            {<Holidays 
            countryCode={code}
            />}
        </div>
    )
}

export default Country;
