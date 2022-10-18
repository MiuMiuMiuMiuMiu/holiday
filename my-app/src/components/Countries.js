import React, { useState , useEffect } from 'react';
import axios from 'axios';

function Countries() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    console.log(data)

    const listItems = data.map((country, index) =>
        <p key={country.name.toString()}> {/*Country name as id*/}
            {country.countryCode} {country.name}
        </p>
    );

    return (
       <div>
            {listItems}
       </div> 
    )
}

export default Countries;