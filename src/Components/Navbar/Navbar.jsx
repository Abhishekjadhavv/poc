// ---- navbar css import here --
import "./Navbar.css"

// --- user image here ---
import userImg  from "../../assets/companyImg.jfif";


const Navbar = ({openMenuBar}) => {
    return (
        <header className="flex c-padding">
            <nav className="navbar flex">
                <div className="nav-logo">
                    FindM<span>atch</span>
                </div>
               
                <div className="nav-right flex justity-end">
                     <div className="bell-notification-icon">
                        <svg width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8.4c0-1.697-.632-3.325-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6Z"></path>
                            <path d="M13.73 21a1.999 1.999 0 0 1-3.46 0"></path>
                        </svg>
                     </div>
                     <div className="nav-user-pic">
                         <img src={userImg} alt="userImage" />
                     </div>
                     <div className="menubar">
                        <svg width="45" height="45" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={openMenuBar}>
                        <path fillRule="evenodd" d="M4.92 17.28a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.599.599 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Zm0-4.8a.6.6 0 0 1 .6-.6h12a.6.6 0 1 1 0 1.2h-12a.6.6 0 0 1-.6-.6Z" clipRule="evenodd"></path>
                        </svg>
                     </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar