import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

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

    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <h3>Upcoming holidays:</h3>
                </Accordion.Header>
                <Accordion.Body>
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
                </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default UpcomingHolidays;