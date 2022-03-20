import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from './card/Card'
import './SummaryCard.scss'

const SummaryCard = ({ value }) => {
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



    return (
        <>
            {
                Country &&
                <div className='cards'>
                    <Card pastRecord={Country.TotalConfirmed} newRecord={Country.NewConfirmed} lastUpdate={Country.Date} title="Confirmed" />
                    <Card pastRecord={Country.TotalConfirmed - Country.TotalDeaths} newRecord={Country.NewConfirmed - Country.NewDeaths} lastUpdate={Country.Date} title="Recovered" />
                    <Card pastRecord={Country.TotalDeaths} newRecord={Country.NewDeaths} lastUpdate={Country.Date} title="Deceased" />
                </div>
            }
        </>
    )
}

export default SummaryCard