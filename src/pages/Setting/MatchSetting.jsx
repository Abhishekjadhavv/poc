import React from 'react'
import userPic from "../../assets/companyImg.jfif";
import CompanySetting from '../../Components/Settings/CompanySetting';
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { login } from '../../Store/Slices/LoginSlice';
const MatchSetting = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login(true))
  },[])
  
  return (
   <>
      <div className="c-container c-padding">
        <div className="Profile flex">
        <Sidebar userPic={userPic}  />
        <div className="profile-right-data">
          <CompanySetting/>
        </div>
        </div>
      </div>
   </>
  )
}

export default MatchSetting