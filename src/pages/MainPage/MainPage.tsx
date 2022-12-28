import React from "react";
import "./MainPage.css";
import { NavBar, LandingZone } from "../../components/index";


interface IMainPage {

}

const MainPage: React.FC<IMainPage> = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <LandingZone />
    </div>
  );
};

export default MainPage;
