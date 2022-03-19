import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Line, Bar } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';
import {CategoryScale} from 'chart.js'
import Charts from 'chart.js/auto'
Charts.register(CategoryScale)
// import { fetchcountryCases } from '../../api';
// { data: { confirmed, recovered, deaths }, country }
const Chart = () => {
    // const [countryCases, setcountryCases] = useState({});

    const countryCases = useSelector(state => state.countryData);
    console.log("CC: ",countryCases);


    // const barChart = (
    //     confirmed ? (
    //         <Bar
    //             data={{
    //                 labels: ['Infected', 'Recovered', 'Deaths'],
    //                 datasets: [
    //                     {
    //                         label: 'People',
    //                         backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
    //                         data: [confirmed.value, recovered.value, deaths.value],
    //                     },
    //                 ],
    //             }}
    //             options={{
    //                 legend: { display: false },
    //                 title: { display: true, text: `Current state in ${country}` },
    //             }}
    //         />
    //     ) : null
    // );

    const lineChart = (
        countryCases[0] ? (
            <Line
                data={{
                    // labels: countryCases.map(({ Date }) => new Date(Date).toLocaleDateString()),
                    labels: countryCases.map((data) => new Date(data.Date).toLocaleDateString()),
                    datasets: [{
                        data: countryCases.map((data) => data.Confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: countryCases.map((data) => data.Deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    }, {
                        data: countryCases.map((data) => data.Recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );

    return (
        <div style={{justifyContent:"center",margin:"5%"}}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                {/* {country ? barChart : lineChart} */}
                {lineChart}
            </Paper>
        </div>
    );
};

export default Chart;