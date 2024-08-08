import React, { useEffect, useState } from 'react';
import { FaEye, FaUserFriends } from "react-icons/fa";
import { MdLocalFireDepartment } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { useSelector, useDispatch } from 'react-redux';
import logo from "../assets/logo.png";
import Navbar from "../components/navbar";
import UserDetail from './UserDetail';
import { setdata } from '../slice/Dataslice'
import axios from 'axios';
import { FaArrowDownShortWide, FaArrowDownWideShort } from "react-icons/fa6";

const Tabledata = () => {
    const [sort, setSort] = useState(false);
    const [sortedUsers, setSortedUsers] = useState([]);
    const dispatch = useDispatch();
    
    const users = useSelector((state) => state.userInfo.users);

    const handleGetdata = async () => {
        try {
            const response = await axios.get("https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json");
            dispatch(setdata(response.data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleGetdata();
    }, [dispatch]);

    useEffect(() => {
        const sortedData = [...users].sort((a, b) => {
            return sort
                ? b.twubric.total - a.twubric.total
                : a.twubric.total - b.twubric.total;
        });
        setSortedUsers(sortedData);
    }, [users, sort]);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleOpen = (user) => {
        setSelectedUser(user);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedUser(null);
    };

    const handlesortIcon = () => {
        setSort(!sort);
    };

    return (
        <>
            <Navbar handleGetdata={handleGetdata} />
            <div className='defaultPadding'>
                <div className='container boxradius defaultPadding'>
                    <div className='tablegrid marginTop border'>
                        <div className='usercol'>
                            <p className='headingName usercol'>UserName</p>
                        </div>
                        <div>
                            <p className='headingName headingHidden'>Twubric Score</p>
                            <img src={logo} className='total Icondispaly' alt="Logo" />
                        </div>
                        <div>
                            <p className='headingName headingHidden'>Friends</p>
                            <p className='personName marginLeft Icondispaly'><FaUserFriends size={20} /></p>
                        </div>
                        <div>
                            <p className='headingName headingHidden'>Influence</p>
                            <p className='personName marginLeft Icondispaly'><FcInfo size={20} /></p>
                        </div>
                        <div>
                            <p className='headingName headingHidden'>Chirpiness</p>
                            <p className='personName marginLeft Icondispaly'><MdLocalFireDepartment size={20} /></p>
                        </div>
                        <div onClick={handlesortIcon} className='pointer'>
                            {
                                sort ? (
                                    <FaArrowDownWideShort />
                                ) : (
                                    <FaArrowDownShortWide />
                                    
                                )
                            }
                        </div>
                    </div>
                    {sortedUsers.length > 0 ? (
                        sortedUsers.map((item) => (
                            <div key={item.uid} className='tablegrid marginTop border'>
                                <div className='usercol'>
                                    <div className='rowflex'>
                                        <img src={item.image} className='tableImage usercol' alt="User" />
                                        <p className='marginLeft personName usercol'>{item.fullname}</p>
                                    </div>
                                </div>
                                <div className='rowflex'>
                                    <img src={logo} className='total' alt="Logo" />
                                    <p className='score'>{item.twubric.total}</p>
                                </div>
                                <div className='rowflex'>
                                    <p className='personName'>{item.twubric.friends}</p>
                                    <p className='personName marginLeft'><FaUserFriends /></p>
                                </div>
                                <div className='rowflex'>
                                    <p className='personName'>{item.twubric.influence}</p>
                                    <p className='personName marginLeft'><FcInfo /></p>
                                </div>
                                <div className='rowflex'>
                                    <p className='personName'>{item.twubric.chirpiness}</p>
                                    <p className='personName marginLeft'><MdLocalFireDepartment /></p>
                                </div>
                                <div className='pointer'>
                                    <FaEye onClick={() => handleOpen(item)} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='center marginTop personName'>No users available</p>
                    )}
                </div>

                {isOpen && selectedUser && (
                    <UserDetail user={selectedUser} handleClose={handleClose} />
                )}
            </div>
        </>
    );
};

export default Tabledata;
