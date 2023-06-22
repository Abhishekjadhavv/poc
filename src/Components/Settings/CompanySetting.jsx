import "./CompanySetting.css"

const CompanySetting = () => {

    return (
        <div className='company-setting'>
            <b>Match Making Settings</b>
            <div className="service grid grid-col-2">
                <div className="servicesOffer">
                    <b>Services you offer</b>
                    <div className="flex">
                        <span className="service-no">1</span>
                        <p className="serviceText">Forensic Accounting</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">2</span>
                        <p className="serviceText">HR & Staffing</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">3</span>
                        <p className="serviceText">Offset Lithography</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <button className="addserviceBtn flex">
                        <span>Add services</span>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="servicesLooking">
                    <b>Services you are looking</b>
                    <div className="flex">
                        <span className="service-no">1</span>
                        <p className="serviceText">Cloud infrastructure</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">2</span>
                        <p className="serviceText">Software Development</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">3</span>
                        <p className="serviceText">Network Security</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <button className="addserviceBtn flex">
                        <span>Add services</span>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="servicesLooking">
                    <b>Industries</b>
                    <div className="flex">
                        <span className="service-no">1</span>
                        <p className="serviceText">IT Services and IT Consulting</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">2</span>
                        <p className="serviceText">Computers and Electronics Manufacturing</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">3</span>
                        <p className="serviceText">Manufacturing</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <button className="addserviceBtn flex">
                        <span>Add Industry</span>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="servicesLooking">
                    <b>Countries</b>
                    <div className="flex">
                        <span className="service-no">1</span>
                        <p className="serviceText">Israel</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">2</span>
                        <p className="serviceText">United States</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <div className="flex">
                        <span className="service-no">3</span>
                        <p className="serviceText">India</p>
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z"></path>
                        </svg>
                    </div>
                    <button className="addserviceBtn flex">
                        <span>Add Country</span>
                        <svg width="25" height="25" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7a.625.625 0 0 1 .625.625v3.75h3.75a.624.624 0 1 1 0 1.25h-3.75v3.75a.624.624 0 1 1-1.25 0v-3.75h-3.75a.625.625 0 1 1 0-1.25h3.75v-3.75A.625.625 0 0 1 12 7Z"></path>
                        </svg>
                    </button>
                </div>
                <form >
                     <div className="input-filed">
                         <label htmlFor="">Employee Size</label>
                         <input type="number" />
                     </div>
                     <button className="saveBtn">save</button>
                </form>
            </div>

        </div>
    )
}

export default CompanySetting