import React, { useEffect, useState } from "react";

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }
     
    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
        <div className="container-fluid mt-5">
            <div className="main-heading">
            <h1 className="mb-5 text-center">COVID-19 Dashboard</h1>
            </div>
        
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Latest</th> 
                            <th>Active</th> 
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((currElem, ind) => {
                            return (
                        <tr key={ind}>
                            <th>{currElem.state}</th>
                            <td>{currElem.confirmed}</td>
                            <td>{currElem.recovered}</td>
                            <td>{currElem.deaths}</td>
                            <td>{currElem.lastupdatedtime}</td>
                            <td>{currElem.active}</td>
                            
                        </tr>
                            )
                        })
                    }
                     
                    </tbody>
                </table>
            </div>
        </div>
             
        </>
    )
}
export default Statewise;