import React from 'react';
import './App.css';

const clock = {
  hour: 13,
  minute: 37,
  second: 0
}

const padNumber = (number) => String(number).padStart(2, 0);

const formatClock = ({hour, minute, second}) => `${padNumber(hour)}:${padNumber(minute)}:${padNumber(second)}`

const DigitalWatch = () => {
  return <div className="digital-watch">{formatClock(clock)}</div>
}

export default DigitalWatch;
