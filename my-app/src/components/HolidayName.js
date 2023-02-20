import React, { useEffect, useState } from 'react';
import DaysToHoliday from './DaysToHoliday';
import axios from 'axios';

//If it is a holiday, display which holiday
//If not a holiday, show amount of days til upcoming holiday
function NextHoliday(props) {
    const [data, setData] = useState();
    const todayHoliday = props.holiday;
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
                })
                .catch(error => console.error(`Error: ${error}`));
        }
        getHolidays()
    }, [countryCode]);

    return (
        <div>
            {/*If there is data in data (ie, not undefined)*/}
            {data &&
                <> 
                    {todayHoliday !== false
                    ?
                    <> 
                        {/*If today is a holiday, display holiday name*/}
                        <h2 className="display-4">
                            {data[0].name}
                        </h2>
                    </>
                    :
                    <> 
                        {/*If today is NOT a holiday, display next holiday name and amount of days til upcoming holiday*/}
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