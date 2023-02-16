import React, { useEffect, useState } from 'react';
import NextHoliday from './NextHoliday';
import axios from 'axios';

function Holiday(countryCode, countryName) {

  const [todayHoliday, setTodayHoliday] = useState();
  let code = countryCode.countryCode;
  let name = countryCode.countryName;

  /* 
  Checks if today is a holiday.
  Returns code 200 if true or 204 if false.
  If true sets todayHoliday to true, else false.
  */
  useEffect(() => {
    const isTodayHoliday = () => {
      axios.get(`https://date.nager.at/api/v3/IsTodayPublicHoliday/${code}?offset=0`)
        .then(function (response) {
          if (response.status === 200) {
            setTodayHoliday(true)
          }
          else {
            setTodayHoliday(false)
          }
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    isTodayHoliday()
  }, [code]);

  /* 
  Calculates the number of days to a holiday based on today's date
  Returns the number of days to a holiday
  */
  const daysToHoliday = (nextHoliday) => {
    const today = new Date();
    const upcomingHoliday = Date.parse(nextHoliday);
    const differenceInTime = Math.abs(upcomingHoliday - Date.parse(today.toLocaleDateString()));
    const DifferenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    return DifferenceInDays
  }

  return (
    <div className="p-5">
      {/* If today is a holiday*/} 
      {todayHoliday === true
        ?
        <>
          <h1 className="mt-5 mb-5 text-center">Today's Holiday in {name}:</h1>
          <NextHoliday
          code={code}
          />
          <h2 className="mt-5 mb-5 text-center">Celebrate 🎉!!!</h2>
        </> 
        : 

        <> {/*If today is not a holiday, present upcoming holiday*/}
          <h1 className="mt-5 mb-5 text-center">Next Holiday in {name}:</h1>
          <NextHoliday
          code={code}
          />
        </>
      }

    </div>
  )
}

export default Holiday;