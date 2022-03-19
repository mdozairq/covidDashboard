import React from 'react'
import { useSelector } from 'react-redux';
import Card from './card/Card'
import './SummaryCard.scss'

const SummaryCard = () => {
    const summary = useSelector(state => state.summaryData);
    console.log("Card:", summary);

    return (
        <>
            {
                Object.keys(summary).length &&
                <div className='cards'>
                    <Card pastRecord={summary.Global.TotalConfirmed} newRecord={summary.Global.NewConfirmed} lastUpdate={summary.Global.Date} title="Confirmed" />
                    <Card pastRecord={summary.Global.TotalConfirmed - summary.Global.TotalDeaths} newRecord={summary.Global.NewConfirmed - summary.Global.NewDeaths} lastUpdate={summary.Global.Date} title="Recovered" />
                    <Card pastRecord={summary.Global.TotalDeaths} newRecord={summary.Global.NewDeaths} lastUpdate={summary.Global.Date} title="Deceased" />
                </div>
            }
        </>
    )
}

export default SummaryCard