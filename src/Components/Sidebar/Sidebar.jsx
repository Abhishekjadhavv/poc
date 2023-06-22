import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../Store/Slices/LoginSlice";
const Sidebar = ({ userPic, showSetting }) => {
  const dispatch = useDispatch();
  const logouts = () => {
    dispatch(logOut(false));
  };
  return (
    <div className="profile-left-data">
      <div className="profile-header flex flex-col">
        <div className="profile-image">
          <img src={userPic} alt="imagea" />
        </div>
        <p className="userName">Procter & Gamble</p>
        <p className="userBio" style={{ display: "none" }}></p>
        <p className="lastUpdate">Last updated 4d ago</p>
        <button className="view-profile-btn">View profile</button>
      </div>
      <ul className="profile-menu-list">
        <li className="flex">
          <NavLink to="/home" className="flex">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.75 19.25h10.5a2 2 0 0 0 2-2v-7.5l-7.25-5-7.25 5v7.5a2 2 0 0 0 2 2Z"></path>
              <path d="M9.75 15.75a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v3.5h-4.5v-3.5Z"></path>
            </svg>
            <span>Home</span>
          </NavLink>
        </li>

        <li className="flex" onClick={showSetting}>
          <NavLink to="/idealCompanies" className="flex">
            <svg
              width="28"
              height="28"
              className="red"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M20.595 2.49a.6.6 0 0 1 .285.51v18a.6.6 0 0 1-.6.6h-3.6a.6.6 0 0 1-.6-.6v-1.8h-1.2V21a.6.6 0 0 1-.6.6H3.48a.6.6 0 0 1-.6-.6v-6.6a.6.6 0 0 1 .41-.569l6.79-2.263V7.8a.6.6 0 0 1 .331-.536l9.6-4.8a.6.6 0 0 1 .584.026ZM10.08 12.833l-6 2V20.4h6v-7.567Zm1.2 7.567h2.4v-1.8a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6v1.8h2.4V3.971l-8.4 4.2v12.23Z"
                clipRule="evenodd"
              ></path>
              <path d="M5.28 15.6h1.2v1.2h-1.2v-1.2Zm2.4 0h1.2v1.2h-1.2v-1.2ZM5.28 18h1.2v1.2h-1.2V18Zm2.4 0h1.2v1.2h-1.2V18Zm4.8-4.8h1.2v1.2h-1.2v-1.2Zm2.4 0h1.2v1.2h-1.2v-1.2Zm-2.4 2.4h1.2v1.2h-1.2v-1.2Zm2.4 0h1.2v1.2h-1.2v-1.2Zm2.4-2.4h1.2v1.2h-1.2v-1.2Zm0 2.4h1.2v1.2h-1.2v-1.2Zm-4.8-4.8h1.2V12h-1.2v-1.2Zm2.4 0h1.2V12h-1.2v-1.2Zm2.4 0h1.2V12h-1.2v-1.2Zm-4.8-2.4h1.2v1.2h-1.2V8.4Zm2.4 0h1.2v1.2h-1.2V8.4Zm2.4 0h1.2v1.2h-1.2V8.4Zm0-2.4h1.2v1.2h-1.2V6Z"></path>
            </svg>
            <span>Ideal Companies</span>
          </NavLink>
        </li>

        <li className="flex" onClick={showSetting}>
          <NavLink to="/matchMakingSettings" className="flex">
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 7.942a4.058 4.058 0 1 0 0 8.116 4.058 4.058 0 0 0 0-8.116ZM9.192 12a2.807 2.807 0 1 1 5.615 0 2.807 2.807 0 0 1-5.615 0Z"></path>
              <path d="M14.245 3.68c-.658-2.238-3.83-2.238-4.49 0l-.117.398a1.091 1.091 0 0 1-1.569.65l-.365-.2C5.654 3.413 3.413 5.655 4.53 7.704l.199.365a1.091 1.091 0 0 1-.65 1.569l-.399.117c-2.237.66-2.237 3.832 0 4.49l.399.118a1.092 1.092 0 0 1 .65 1.569l-.2.365c-1.115 2.05 1.126 4.292 3.176 3.175l.365-.2a1.09 1.09 0 0 1 1.569.65l.117.4c.66 2.237 3.832 2.237 4.49 0l.118-.4a1.092 1.092 0 0 1 1.569-.65l.365.2c2.05 1.117 4.292-1.127 3.175-3.175l-.2-.365a1.09 1.09 0 0 1 .65-1.57l.4-.117c2.237-.658 2.237-3.83 0-4.49l-.4-.117a1.091 1.091 0 0 1-.65-1.569l.2-.365c1.117-2.05-1.127-4.291-3.175-3.175l-.365.199a1.091 1.091 0 0 1-1.57-.65l-.117-.399Zm-3.29.353c.307-1.044 1.784-1.044 2.092 0l.117.399a2.342 2.342 0 0 0 3.366 1.393l.364-.2c.955-.518 2 .525 1.48 1.482l-.199.365a2.34 2.34 0 0 0 1.395 3.365l.398.117c1.044.308 1.044 1.785 0 2.093l-.399.117a2.34 2.34 0 0 0-1.394 3.366l.2.364c.52.955-.525 2-1.48 1.48l-.365-.199a2.34 2.34 0 0 0-3.366 1.395l-.117.398c-.308 1.044-1.785 1.044-2.093 0l-.117-.399a2.34 2.34 0 0 0-3.365-1.394l-.365.2c-.955.52-2-.525-1.48-1.48l.198-.365a2.341 2.341 0 0 0-1.393-3.367l-.4-.118c-1.043-.307-1.043-1.785 0-2.092l.4-.118a2.341 2.341 0 0 0 1.393-3.363l-.2-.365c-.518-.955.525-2 1.482-1.48l.365.198a2.341 2.341 0 0 0 3.365-1.393l.117-.4Z"></path>
            </svg>
            <span>Match Making Settings</span>
          </NavLink>
        </li>
        <li className="flex">
          <NavLink to="/" className="flex" onClick={logouts}>
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.08 17.4a.6.6 0 0 0 .6.6h9.6a.6.6 0 0 0 .6-.6V6.6a.6.6 0 0 0-.6-.6h-9.6a.6.6 0 0 0-.6.6V9a.6.6 0 1 1-1.2 0V6.6a1.8 1.8 0 0 1 1.8-1.8h9.6a1.8 1.8 0 0 1 1.8 1.8v10.8a1.8 1.8 0 0 1-1.8 1.8h-9.6a1.8 1.8 0 0 1-1.8-1.8V15a.6.6 0 1 1 1.2 0v2.4Z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M3.054 12.424a.6.6 0 0 1 0-.85l3.6-3.6a.6.6 0 1 1 .85.85L4.927 11.4H15.48a.6.6 0 1 1 0 1.2H4.927l2.577 2.575a.6.6 0 1 1-.85.85l-3.6-3.6Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>LogOut</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
