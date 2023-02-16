import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function UpcomingHolidays() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/NextPublicHolidaysWorldwide')
            .then(function (response) {
                setData(response.data);
            })
    }, []);


    const tableItems = data.map((country, index) =>
        <tr key={index}>
            <td>{country.date}</td>
            <td>{country.name}</td>
            <td>{country.countryCode}</td>
        </tr>
    );

    console.log(tableItems)

    return (
        <div>
            <h1 className="mt-5 mt-sm-5 mt-md-0 mb-4" >
                Upcoming holidays:
            </h1>
            <Table hover>
                <thead>
                    <tr>
                        <th className="col-2">Date</th>
                        <th>Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </Table>
            
        </div>
    )
}

export default UpcomingHolidays;