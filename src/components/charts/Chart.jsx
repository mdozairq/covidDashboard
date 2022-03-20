import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Paper from '@mui/material/Paper';
import { CategoryScale } from 'chart.js'
import Charts from 'chart.js/auto'
Charts.register(CategoryScale)


const Chart = () => {

    const countryCases = useSelector(state => state.countryData);

    const lineChart = (
        countryCases[0] ? (
            <Line
                data={{
                    // labels: countryCases.map(({ Date }) => new Date(Date).toLocaleDateString()),
                    labels: countryCases.map((data) => new Date(data.Date).toLocaleDateString()),
                    datasets: [{
                        data: countryCases.map((data) => data.Confirmed),
                        label: 'Confirmed',
                        borderColor: 'red',
                        fill: true,
                    },
                    {
                        data: countryCases.map((data) => data.Recovered > 0 ? data.Confirmed - (data.Deaths + data.Recovered) : data.Deaths),
                        label: 'Active',
                        borderColor: '#3333ff',
                        backgroundColor: 'rgba(36, 46, 177, 0.3)',
                        fill: true,
                    },
                    {
                        data: countryCases.map((data) => data.Deaths),
                        label: 'Deaths',
                        borderColor: '#6c757d',
                        backgroundColor: 'rgba(58, 58, 59, 0.3)',
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
        <div style={{ justifyContent: "center", margin: "5%", }}>
            <Paper sx={{ width: '95%', mb: 2, p: 2 }}>
                {countryCases[0] ? <h2>{countryCases[0].Country}</h2> : null}
                {lineChart}
            </Paper>
        </div>
    );
};

export default Chart;