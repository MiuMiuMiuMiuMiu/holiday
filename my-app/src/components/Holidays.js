import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Holidays(countryCode) {

  const [data, setData] = useState();
  const [todayHoliday, setTodayHoliday] = useState();
  let code = countryCode.countryCode;
  //console.log(code)

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
  Get upcoming holidays in the next 365 days
  Set response to data.
  */
  useEffect(() => {
    const getHolidays = () => {
      axios.get(`https://date.nager.at/api/v3/nextPublicHolidays/${code}`)
        .then(function (response) {
          setData(response.data)
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    getHolidays()
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
    <div>
      {/* If today is a holiday*/} 
      {todayHoliday === true
        ?
        <>
          <h1 className="mt-5 mb-5 text-center">Today's Holiday:</h1>
          {/*And if data is not undefined*/}
          {data &&
            <>
              <h2 className="display-2 text-center">{data[0].name}</h2>
              <h1 className="mt-5 mb-5 text-center">Celebrate!!!</h1>
              <h3 className="mt-5 display-6 text-center">Next Holiday is {data[1].name} in {daysToHoliday(data[1].date)} days</h3>
            </>
          }
        </> 
        : 
        data && 
        <> {/*If today is not a holiday, present upcoming holiday*/}
          <h1 className="mt-5 mb-5 text-center">Next Holiday:</h1>
          <h2 className="display-2 text-center">
            {data[0].name}
          </h2>
          <h2 className="text-center mt-3 mb-3">
            in...
          </h2>
          <h2 className="display-2 text-center">
            {daysToHoliday(data[0].date)} Days
          </h2>
        </>
      }

    </div>
  )
}

export default Holidays;