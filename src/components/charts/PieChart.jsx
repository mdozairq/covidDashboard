import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';


const PieChart = ({ value }) => {

    const [Country, setCountry] = useState({})
    const summary = useSelector(state => state.summaryData);

    useEffect(() => {
        let country;
        if (value === 'Global')
            country = summary.Global
        else
            country = Object.keys(summary).length && summary.Countries.find(a => a.Country === value);
        setCountry(country)
    }, [value, summary])

    const pieChart = (Country && <Doughnut
        data={{
            labels: [
                'Recovered',
                'Confirmed',
                'Deceased'
            ],
            datasets: [{
                label: `${value} Dataset`,
                data: [Country.TotalConfirmed - Country.TotalDeaths, Country.TotalConfirmed, Country.TotalDeaths],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.5',
                    'red',
                    'gray'
                ],
                hoverOffset: 1,
                // radius: "50%",
                // maintainAspectRatio : false,
            }]
        }}
        options={{
            maintainAspectRatio : false,
            aspectRatio: 1,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }
            },
            responsive: true,
            cutoutPercentage: 90,
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        }}
    />);

    return (
        <div style={{ justifyContent: "center", margin: "5%", alignItems: "center" }}>
            <Paper sx={{ mb: 2, p: 2,  height:"450px" }}>
                {pieChart}
            </Paper>
        </div>
    )
}

export default PieChart