import React from 'react'
import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import logo from "../assets/logo.png"
import { FaUserFriends } from "react-icons/fa";
import { MdLocalFireDepartment } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { IoIosRemoveCircle } from "react-icons/io";
import { removedata } from '../slice/Dataslice';
const UserDetail = ({user,handleClose}) => {

    const dispatch = useDispatch()


   const handleDelte = (id)=>{
        dispatch(removedata(id))
        handleClose()
        alert("Data is Removed")
   }

  return (
    <div className='containerCenter defaultPadding' style={{position:'absolute',top:0,left:0}}>
           <div className='UserContainer'>

                    <div className=' rowflex between defaultPadding border'>
                        <p>UserDetails</p>
                        <IoIosClose  size={35} onClick={handleClose} className='pointer'/>
                    </div>

                    <div className='border'>
                        <div className='rowflex between border defaultPadding '>
                            <div className=' rowflex'>
                            <img src={user.image} className='userImage '/>
                            <div>
                            <p className=' marginLeft headingName '>Full Name</p>
                            <p className=' marginLeft  personName'>{user.fullname}</p>
                            </div>
                            </div>
                            <div>
                            <p className=' marginLeft headingName '><span>score</span></p>
                            <div className='rowflex'>
                                <img src={logo} className='totalimage'/>
                                <h2>{user.twubric.total}</h2>
                            </div>
                            </div>
                        </div>

                        <div className=' rowflex between defaultPadding'>
                            <div className=''>
                                    <p className='logoName marginLeft'><FaUserFriends /></p>
                                    <div>
                                    <h2 className='center '>{user.twubric.friends}</h2>
                                    <p className='headingName'>Friends</p>
                                    </div>

                            </div>
                            <div>
                            <p className='logoName marginLeft'><FcInfo /></p>
                               <div>
                               <h2 className='center '>{user.twubric.influence}</h2>
                               <p className='headingName'>Influence</p>
                               </div>
                            </div>
                            <div>
                            <p className='logoName marginLeft'><MdLocalFireDepartment /></p>
                                <div>
                                <h2 className='center '>{user.twubric.chirpiness}</h2>
                                <p className='headingName'>Chirpiness</p>
                                </div>
                            </div>
                        </div>

                       

                        <div>

                        

                        </div>

                        
                    </div>


                    <div className='defaultPadding paddingBottom rowflex between paddingtop' >
                            <div className='rowflex'>
                                <p className='personName'>Joining Date :</p>
                                <p className='headingName marginLeft '>{
                                        new Date(user.join_date * 1000).toLocaleDateString()
                                    }</p>
                            </div>
                            <div className='rowflex pointer' onClick={()=>handleDelte(user.uid)}>
                            <p className='headingName red'>Remove</p>
                            </div>
                    </div>

           </div>
    </div>
  )
}

export default UserDetail