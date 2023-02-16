import React from 'react';
import Holidays from '../components/Holidays.js';
import {useLocation} from 'react-router-dom';

function Country() {

    const location = useLocation();
    let code = location.state.code;
    let name = location.state.name;
    
    return (
        <div>
            {<Holidays 
            countryCode={code}
            countryName={name}
            />}
        </div>
    )
}

export default Country;
