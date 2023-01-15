import React from "react";
import "./LandingZone.css";


interface ILandingZone {

}

export const LandingZone: React.FC<ILandingZone> = () => {
    return (
        <div className="landZoneMainContainer">
            <div className="landZoneContentContainer">
                <div className="typeWriter">
                    <h1 className="helloMsg">Hello</h1>
                </div>
                <div className="typeWriterTwo">
                    <h1>I am a web developer</h1>
                </div>
            </div>
        </div>
    )
};