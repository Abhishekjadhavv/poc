import React from 'react'

const IdealCompanies = () => {
  return (
    <div className='company-setting'>
            <b>Ideal Companies</b>
            <div className="service grid grid-col-2">
                <div className="servicesOffer">
                    <b>Companies</b>
                    <div className="flex">
                        <span className="service-no">1</span>
                        <p className="serviceText">Amazon Web Services (AWS)</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">2</span>
                        <p className="serviceText">Apple</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">3</span>
                        <p className="serviceText">Imperva</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <button className="addserviceBtn flex">
                        <span>Add Company</span>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default IdealCompanies