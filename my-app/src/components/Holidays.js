import React, {useEffect} from 'react';
import axios from 'axios';

function Holidays(countryCode) {
    
    let code = countryCode.countryCode;
    //console.log(code)
    
    useEffect(() => {
        axios.get(`https://date.nager.at/api/v3/nextPublicHolidays/${code}`)
          .then(function (response) {
            console.log(response.data);
          })
    }, [code]);

    return (
       <div>
        <h1>HELLO</h1>
       </div> 
    )
}

export default Holidays;