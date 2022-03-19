import React from 'react'
import './Card.scss';
import CountUp from 'react-countup';

const Card = ({ pastRecord, newRecord, title, lastUpdate }) => {

  return (
    <div className='cardcover' style={{
      color: title === 'Confirmed' ? "#ff073a" :
        title === 'Recovered' ? "#28a745" : "#6c757d"
    }}>
      <h5>{title}</h5>
      <h3>+<CountUp end={newRecord} separator="," /></h3>
      <h1><CountUp start={0} end={pastRecord} duration={2.75} separator="," /></h1>
      <h4 color=''>{new Date(lastUpdate).toDateString()}</h4>
    </div>
  )
}

export default Card