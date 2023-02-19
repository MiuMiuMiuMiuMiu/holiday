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

    const tableItems = data.map((country, index) => {
        return (
            <tr key={index}>
                <td>{country.date}</td>
                <td>{country.name}</td>
                <td>{country.localName}</td>
            </tr>
        )
    });

    return (
        <div className="mt-5">
            <h1 className="text-center">Public holidays in {state.name} in 2023</h1>
            <Table className="my-5">
                <thead>
                    <tr>
                        <th className="col-4 col-md-2 col-lg-2">Date</th>
                        <th>Name</th>
                        <th>Local name</th>
                    </tr>
                </thead>
                <tbody>
                    {tableItems}
                </tbody>
            </Table>
        </div>
        
    )
}

export default CountryInfo;