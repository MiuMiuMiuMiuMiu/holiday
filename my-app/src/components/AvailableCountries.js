import React, {useState, useEffect } from 'react';
import axios from 'axios';

function AvailableCountries() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    console.log(data);

    const countries = data.map((country, index) =>
        <p key={index}>
            {country.name}
        </p>
    );

    return (
        <div>
            <h1 className="mt-5 mt-sm-5 mt-md-0 mb-4">Available Countries:</h1>
            {countries}
        </div>
    )
}

export default AvailableCountries;