import React, { useEffect, useState } from 'react';
import HolidayName from './HolidayName';
import axios from 'axios';
import { Link } from "react-router-dom";

function Holiday(props) {

  const [todayHoliday, setTodayHoliday] = useState();
  const countryCode = props.code;
  const countryName = props.name;

  /* 
  Checks if today is a holiday.
  Returns code 200 if true or 204 if false.
  If true sets todayHoliday to true, else false.
  */
  useEffect(() => {
    const isTodayHoliday = () => {
      axios.get(`https://date.nager.at/api/v3/IsTodayPublicHoliday/${countryCode}?offset=0`)
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
  }, [countryCode]);

  return (
    {/* 
    To mount and unmount div everytime time a country is selected, set different key each time.
    This is done so the fade-in animation triggers. 
    */},
    <div>
      <div key={Math.random()} className="fade-in"> 
        {/* If today is a holiday, present today's holiday*/} 
        {todayHoliday
          ?
          <>
            <h1 className="mt-5 mb-5">YES😃! Today's holiday in <Link>{countryName}</Link> is:</h1>
            <HolidayName
            code={countryCode}
            />
            <h2 className="mt-5 mb-5">Celebrate 🎉!!!</h2>
          </> 
          : 
          <> {/*If today is not a holiday, present upcoming holiday*/}
            <h2 className="mt-5 mb-4">NOPE😢! Next holiday in <Link className="link-black" to={`/country/${countryCode}`} state={{ code: countryCode, name: countryName }}>{countryName}</Link> is:</h2>
            <h2 className="display-2">
              <HolidayName
                code={countryCode}
                holiday={todayHoliday}
              />
            </h2>
          </>
        }
      </div>
    </div>
  )
}

export default Holiday;