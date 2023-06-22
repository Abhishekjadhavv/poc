import React from 'react'
// ----  moment npm pcg here ---
import moment from 'moment'

const ProfileCart = ({viewAllDetails,ele}) => {
    return (
        <div className="cart" >
            <div className="profile-default-show-data">
                <div className="profile-default-show-data-header flex justify-between">
                    <div className="companyImage">
                        <img src={ele.logo_url} alt="companyLog" />
                    </div>
                    <span className="day-ago-text">{ele.time_posted}</span>
                </div>
                <div className="profile-default-show-header-content">
                    <b className="jobTitle">{ele.jobTitle.length > 40 ? `${ele.jobTitle.split("").splice(0,40).join('')}...`:ele.jobTitle.split("").splice(0,30).join('')}</b>
                    <p className="company-name">{ele.name}</p>
                    <p className="job-location flex">
                        <svg width="25" height="25" fill="#777" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.999 13.128c-.629 1.275-1.48 2.544-2.352 3.684A37.81 37.81 0 0 1 12 19.896a37.91 37.91 0 0 1-2.647-3.084c-.872-1.14-1.724-2.41-2.352-3.684C6.365 11.841 6 10.635 6 9.6a6 6 0 0 1 12 0c0 1.035-.366 2.24-1.001 3.528Zm-5 8.472s7.2-6.823 7.2-12a7.2 7.2 0 0 0-14.4 0c0 5.177 7.2 12 7.2 12Z"></path>
                            <path d="M12 12a2.4 2.4 0 1 1 0-4.801A2.4 2.4 0 0 1 12 12Zm0 1.2A3.6 3.6 0 1 0 12 6a3.6 3.6 0 0 0 0 7.2Z"></path>
                        </svg>
                        <span className="job-location-text">{ele.location}</span>
                    </p>
                </div>
            </div>
            <div className="profile-show-on-click">
                <p className='Industry'> <b>Date of intent</b> : {moment.utc(ele.createdPost).format("MM/DD/YYYY")}</p>
                <p className='Industry'> <b>Company Web URL</b> : <a href={ele.website} target='_blank' rel="noreferrer">click here</a></p>
                <p className='Industry'> <b>Industry</b> : {ele.industry}</p>
                <p className='Industry'> <b>Employees size</b> : {ele.size}</p>
                <p className='Industry'> <b>Country</b> : {ele.countryPost}</p>
                <p className='Industry'> <b>Company Linkedin URL</b> : <a href={ele.url} target='_blank' rel="noreferrer">click here</a> </p>
            </div>
            <div className="view-more">
                <span className="view-more-text" onClick={viewAllDetails}>Expand</span>
            </div>
        </div>
    )
}

export default ProfileCart