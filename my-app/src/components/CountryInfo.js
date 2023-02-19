import React, {useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function CountryInfo(props) {

    //Country name and country code in state
    let { state } = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://date.nager.at/api/v3/PublicHolidays/2023/${state.code}`)
          .then(function (response) {
            setData(response.data);
          })
    }, [state.code]);

    console.log(data);

    return (
        <div className="mt-5 text-center">
            <h1>Public holidays in {state.name} in 2023</h1>
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Local name</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>
        
    )
}

export default CountryInfo;