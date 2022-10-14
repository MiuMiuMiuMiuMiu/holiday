import React, { useState , useEffect } from 'react';
import axios from 'axios';

function Holidays() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/NextPublicHolidays/SE')
          .then(function (response) {
            setData(response.data);
          })
    }, []);


    return (
       <div>
            <h1>This is the home-page</h1>
       </div> 
    )
}

export default Holidays;