import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { MdDateRange } from "react-icons/md";
import Datefilter from './Datefilter';
import { IoMdRefresh } from "react-icons/io";

const navbar = ({handleGetdata}) => {

  const [isopen,setIsopen] = useState(false)


  const handleDatefilter = ()=>{
    setIsopen(true)
  }

  return (
    <>
        <div className='rowflex defaultPadding between'>
            <div className='pointer rowflex'>
            <img src={logo} className='logoimage'/>
            <h2>Tw<span>ub</span>ric</h2>
            </div>
            <div className=' rowflex'>
            <div className='pointer dateIcon' onClick={handleDatefilter}>
              <MdDateRange  size={25}  />
            </div>
            <div className='pointer dateIcon marginLeft' onClick={handleGetdata}>
              <IoMdRefresh size={25}  />
            </div>
            </div>
        </div>

        {
          isopen && (
            <div>
                  <div className='containerCenter defaultPadding' style={{position:'absolute',top:0,left:0}}>
                        <div className='UserContainer'>
                              <Datefilter setIsopen={setIsopen}/>
                        </div>
                  </div>
            </div>
          )
        }

    </>
  ) 
}

export default navbar