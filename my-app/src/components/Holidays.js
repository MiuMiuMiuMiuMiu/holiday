import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Holidays(countryCode) {

  const [data, setData] = useState();
  const [todayHoliday, setTodayHoliday] = useState();
  let code = countryCode.countryCode;
  //console.log(code)


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

  const daysToHoliday = (nextHoliday) => {
    const today = new Date();
    const upcomingHoliday = Date.parse(nextHoliday);
    //const nextHoliday = Date.parse(data[0].date);
    const diffTime = Math.abs(upcomingHoliday - Date.parse(today.toLocaleDateString()));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
  }

  console.log(data)

  return (
    <div>

      {todayHoliday === true
        ?
        <>
          <h1 className="mt-5 mb-5 text-center">Today's Holiday:</h1>
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
        <>
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