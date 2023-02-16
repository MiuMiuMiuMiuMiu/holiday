import React, { useEffect, useState } from 'react';
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
            {data &&
                <> {/*If today is not a holiday, present upcoming holiday*/}
                <h2 className="display-2 text-center">
                  {data[0].name}
                </h2>
              </>
            }
        </div>
    )
}

export default NextHoliday;