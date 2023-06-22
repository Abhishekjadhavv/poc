import userPic from "../../assets/companyImg.jfif";
import IdealCompanies from "../../Components/IdealCompanies/IdealCompanies";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "../../Store/Slices/LoginSlice";
const IdealCompany = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login(true))
  },[])
  return (
    <div className="c-container c-padding">
      <div className="Profile flex">
        <Sidebar userPic={userPic} />
        <div className="profile-right-data">
          <IdealCompanies/>
        </div>
      </div>
    </div>
  );
};

export default IdealCompany;
