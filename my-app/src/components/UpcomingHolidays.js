import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import ConvertCodeToCountry from './ConvertCodeToCountry';

function UpcomingHolidays() {

    const [data, setData] = useState([]);

    //API returns upcoming holidays for the next 7 days (date, name (of holiday), localName (of holiday) and countryCode)
    //Does NOT return country name. Thus have to send it to another component to "translate" the code to country name
    useEffect(() => {
        axios.get('https://date.nager.at/api/v3/NextPublicHolidaysWorldwide')
            .then(function (response) {
                setData(response.data);
            })
    }, []);

    return (
        <div className="mb-5">
            {data && 
            <>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h3>Upcoming holidays:</h3>
                    </Accordion.Header>
                    <Accordion.Body>
                    <Table hover>
                        <thead>
                            <tr>
                                <th className="col-3 col-md-4 col-lg-3">Date</th>
                                <th>Name</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*Send data to component to display & convert country code to country name */}
                        <ConvertCodeToCountry
                            comingHolidays={data}
                            />
                        </tbody>
                    </Table>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </>
            }
        </div>
    )
}

export default UpcomingHolidays;