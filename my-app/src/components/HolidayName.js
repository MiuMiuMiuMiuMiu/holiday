import React, { useEffect, useState } from 'react';
import DaysToHoliday from './DaysToHoliday';
import axios from 'axios';

function NextHoliday(props) {
    const [data, setData] = useState();
    const [holidayToday, setHolidayToday] = useState();
    const countryCode = props.code;

    /*
    Get upcoming holidays in the next 365 days
    Set response to data.
    */
    useEffect(() => {
        const getHolidays = () => {
            axios.get(`https://date.nager.at/api/v3/nextPublicHolidays/${countryCode}`)
                .then(function (response) {
                    setData(response.data)
                    isTodayHoliday(response.data[0].date)
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        getHolidays()
    }, [countryCode]);

    function isTodayHoliday(date) {
        //Compares date of today and holiday date to check whether today is a holiday.
        const today = new Date();
        if (today.toISOString().split('T')[0] === date) {
            setHolidayToday(true);
        } else {
            setHolidayToday(false);
        }
    }

    return (
        <div>
            {/*If there is data in data (ie, not undefined)*/}
            {data &&
                <> 
                    {holidayToday 
                    ?
                    <> 
                        {/*If today is a holiday, display holiday name*/}
                        <h2 className="display-4">
                            {data[0].name}
                        </h2>
                    </>
                    :
                    <> 
                        {/*If today is NOT a holiday, display holiday name and amount of days til upcoming holiday*/}
                        <h2 className="display-4">
                            {data[0].name}
                        </h2>
                        <h2 className="mt-3 mb-3">
                            in...
                        </h2>
                        <DaysToHoliday date={data[0].date}/> 
                    </>
                    }
                </>
            }
        </div >
    )
}

export default NextHoliday;