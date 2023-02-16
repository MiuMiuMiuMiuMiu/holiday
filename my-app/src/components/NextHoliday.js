import React, { useEffect, useState } from 'react';
import DaysToHoliday from './DaysToHoliday';
import axios from 'axios';

function NextHoliday(code) {
    const [data, setData] = useState();

    const countryCode = code.code;

    /*
    Get upcoming holidays in the next 365 days
    Set response to data.
    */
    useEffect(() => {
        const getHolidays = () => {
            axios.get(`https://date.nager.at/api/v3/nextPublicHolidays/${countryCode}`)
                .then(function (response) {
                    setData(response.data)
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        getHolidays()
    }, [countryCode]);

    return (
        <div>
            {/*If there is data in data*/}
            {data &&
                <>
                    <h2 className="display-2 text-center">
                        {data[0].name}
                    </h2>
                    <DaysToHoliday 
                    date={data[0].date}
                    /> 
                </>
            }
        </div >
    )
}

export default NextHoliday;