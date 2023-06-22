import './App.css';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';

import {Routes,Route } from 'react-router-dom';
import MatchSetting from './pages/Setting/MatchSetting';
import IdealCompany from './pages/IdealCompany/IdealCompany';
import {useSelector } from 'react-redux';
function App() {
  const data = useSelector((store)=>store.loginS)
   
  const openMenuBar = ()=>{
    const sidebar = document.querySelector(".profile-left-data");
     sidebar.classList.toggle("active")
  }

  return (
    <>
      {
        data?<Navbar  openMenuBar={openMenuBar}/>:null
      } 
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Profile/>}/>
          <Route path='/idealCompanies' element={<IdealCompany/>}/>
          <Route path='/matchMakingSettings' element={<MatchSetting/>}/>
      </Routes>
    </>
  );
}

export default App;
