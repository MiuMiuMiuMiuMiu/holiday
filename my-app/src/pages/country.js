import React from 'react';
import Holiday from '../components/Holiday.js';
import {useLocation} from 'react-router-dom';

function Country() {

    const location = useLocation();
    let code = location.state.code;
    let name = location.state.name;
    
    return (
        <div>
            {<Holiday 
            countryCode={code}
            countryName={name}
            />}
        </div>
    )
}

export default Country;
