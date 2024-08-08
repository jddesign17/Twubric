import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { datefilterdata } from "../slice/Dataslice";

const Datefilter = ({ setIsopen }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const dispatch = useDispatch();

  const handleDateFilter = () => {
    const startstamp = new Date(startDate).getTime() / 1000;
    const endstamp = new Date(endDate).getTime() / 1000;

    if (startstamp < endstamp) {
      dispatch(datefilterdata({ startstamp, endstamp }));
      setIsopen(false)
    } else {
      alert("Please enter a valid date range");
    }
  };

  const handleClose = () => {
    setIsopen(false);
  };

  return (
    <div className='paddingBottom'>
      <div className='rowflex between defaultPadding border'>
        <p>Date Filter</p>
        <IoIosClose size={35} className='pointer' onClick={handleClose} />
      </div>
      <div className='defaultPadding '>
        <div className='colflex marginTop' style={{ flexDirection: 'column' }}>
          <label className='headingName'>Enter Start Date: </label>
          <input
            type='date'
            className='dateInput'
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
        </div>
        <div className='colflex marginTop' style={{ flexDirection: 'column' }}>
          <label className='headingName'>Enter End Date: </label>
          <input
            type='date'
            className='dateInput'
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
          />
        </div>
        <button className='marginTop btn pointer' onClick={handleDateFilter}>Submit</button>
      </div>
    </div>
  );
}

export default Datefilter;
