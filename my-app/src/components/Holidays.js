import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Holidays(countryCode) {

  const [data, setData] = useState()
  let code = countryCode.countryCode;
  //console.log(code)

  useEffect(() => {
    getHolidays()
  }, []);

  const getHolidays = () => {
    axios.get(`https://date.nager.at/api/v3/nextPublicHolidays/${code}`)
      .then(function (response) {
        setData(response.data)
      })
      .catch(error => console.error(`Error: ${error}`));
  }
  
  const daysToHoliday = () => {
    const today = new Date();
    const nextHoliday = Date.parse(data[0].date);
    //console.log(compareDate, nextHoliday)
    const diffTime = Math.abs(nextHoliday - Date.parse(today.toLocaleDateString()));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays
  }

  return (
    <div>
      <h1 className="mt-5 mb-5 text-center">Next Holiday:</h1>
      {data !== undefined &&
        <>
          <h2 className="display-2 text-center">
            {data[0].name}
          </h2>
          <h2 className="text-center mt-3 mb-3">
            in...
          </h2>
          <h2 className="display-2 text-center">
            {daysToHoliday()} Days
          </h2>
          
        </>
      }

    </div>
  )
}

export default Holidays;