import "./Profile.css";
import userPic from "../../assets/companyImg.jfif";
import newcompanyData from "../../data/newCompanyData";
import newJobs from "../../data/newJobsData";
import ProfileCart from "../../Components/Carts/ProfileCart";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import CompanySetting from "../../Components/Settings/CompanySetting";
import { login } from "../../Store/Slices/LoginSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Profile = () => {

  const [setting, setSetting] = useState(false);
  // ----- methods here--
  // ------- this method is use to remove classes --
  const removeClasses = () => {
    const eles = document.querySelectorAll(".profile-show-on-click");
    const viewMoreText = document.querySelectorAll(".view-more-text");
    eles.forEach((ele, index) => {
      ele.classList.remove("active")
      ele.style.height = `0px`;
      viewMoreText[index].innerText = "Expand";
    })
  }

  // ----- this method is use to show all recommendedJob's data -----
  const viewAllDetails = (e) => {
    let showData = e.target.parentNode.previousElementSibling;
    let previousText = e.target.innerText;
    removeClasses(e, showData)
    previousText = previousText === "Collapse" ? null : showData.classList.add("active")
    console.log(previousText);
    if (showData.classList.contains('active') && e.target.innerText === "Expand") {
      showData.style.height = `${showData.scrollHeight}px`;
      e.target.innerText = 'Collapse'
    } else {
      showData.style.height = '0px'
      e.target.innerText = 'Expand'
      showData.classList.remove("active")
    }
  }

  // ------ this method is use to  removeMenuItemClasses() ---
  const removeMenuItemClasses = () => {
    const items = document.querySelectorAll(".profile-menu-list li")
    for (const item of items) {
      item.classList.remove("active");
    }
  }

  // ----- this method is use to show company setting --
  const showSetting = (e) => {
    let previousText = e.target.classList.contains("active")
    removeMenuItemClasses()
    setSetting(true);
    previousText === true ? e.target.classList.remove("active") :
      e.target.classList.add("active")
  }

  // ---- this method is use to show home page ----
  const showHome = (e) => {
    removeMenuItemClasses()
    e.target.classList.add("active")
    setSetting(false);
  }


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login(true))
  },[])
  

  return (
    <div className="c-container c-padding">
      <div className="Profile flex">
        <Sidebar userPic={userPic}  showSetting={showSetting} showHome={showHome} />
        <div className="profile-right-data">
          {setting ? <CompanySetting /> : <>
            <b className="recommended-jobs">Matched Profiles</b>
            <div className="jobsData">
              {
                newcompanyData.map((ele, index) => {
                  ele.createdPost = newJobs[index].created;
                  ele.time_posted = newJobs[index].time_posted;
                  ele.location = newJobs[index].location;
                  ele.jobTitle = newJobs[index].title;
                  ele.countryPost = newJobs[index].country;
                  return <ProfileCart viewAllDetails={viewAllDetails} key={index} ele={ele} />
                })
              }
            </div>
          </>
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
