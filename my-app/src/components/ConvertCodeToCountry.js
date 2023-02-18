import {useState, useEffect } from 'react';
import axios from 'axios';

function ConvertCodeToCountry(props) {
    const [data, setData] = useState([]);
    const [countryCodes, setCountryCodes] = useState([]);
    const upcomingHolidays = props.comingHolidays;

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    //Put upcoming holiday country codes in list
    useEffect(()=>{
        const iterator = upcomingHolidays.values();
        //Reset the list as useEffect may be rendered more than once
        setCountryCodes([]);
        //Save country codes of upcoming holidays in a list
        for (const value of iterator) {
            setCountryCodes(countryCodes => [...countryCodes, value.countryCode]);
        }
        
    }, [upcomingHolidays])

    //Translate country codes to country name
    console.log(data)

    const tableItems = countryCodes.map((country, index, data) => {
        return (
            <td>Test</td>
        )
    });
    
    /*console.log(data)
    console.log(upcomingHolidays)*/

    return tableItems;
}

export default ConvertCodeToCountry;