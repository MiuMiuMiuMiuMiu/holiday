import {useState, useEffect } from 'react';
import axios from 'axios';

function ConvertCodeToCountry(props) {
    const [data, setData] = useState([]);
    const [countryName, setCountryName] = useState([]);
    //Data sent in from UpcomingHolidays.js
    const upcomingHolidays = props.comingHolidays;

    //Returns all available countries (name (of country), countryCode)
    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/availableCountries')
          .then(function (response) {
            setData(response.data);
          })
    }, []);

    //Translate country codes to country name
    useEffect(()=>{
        //Reset the list as useEffect may be rendered more than once
        setCountryName([]);
        for (let i in upcomingHolidays) {
            for (let x in data) {
                //Save country names in a list
                if(upcomingHolidays[i].countryCode === data[x].countryCode) //If country code matches
                setCountryName(countryName => [...countryName, data[x].name]); //Add to list
            }
        }
    }, [upcomingHolidays, data])

    const tableItems = upcomingHolidays.map((country, index) => {
        return (
            <tr key={index}>
                <td>{country.date}</td>
                <td>{country.name}</td>
                <td>{countryName[index]}</td>
            </tr>
        )
    });
    return tableItems;
}

export default ConvertCodeToCountry;