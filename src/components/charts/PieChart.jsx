import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import {Doughnut } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';


const PieChart = ({value}) => {

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
                data: [Country.TotalConfirmed - Country.TotalDeaths, Country.TotalConfirmed  , Country.TotalDeaths],
                backgroundColor: [
                    'rgba(0, 255, 0, 0.5',
                    'red',
                    'gray'
                ],
                hoverOffset: 3
            }]
        }}
        options={{
            legend: {
                display: false,
                position: "bottom",
                labels: {
                    fontFamily: "'Noto Sans JP', sans-serif",
                    fontColor: '#000'
                },
                onClick: (e) => e.stopPropagation()
            }
        }}
    />);

    return (
        <div style={{justifyContent:"center",margin:"5%", alignItems:"center"}}>
            <Paper sx={{height:"80%", width: '95%', mb: 2, p:2 }}>
                {pieChart}
            </Paper>
        </div>
    )
}

export default PieChart