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

    console.log(data)

    const listItems = data.map((holiday) =>
        <p key={holiday.toString()}>
            {holiday.date} {holiday.localName}
        </p>
);

    return (
       <div>
        {data.length > 0 && 
            listItems
        }
            
       </div> 
    )
}

export default Holidays;