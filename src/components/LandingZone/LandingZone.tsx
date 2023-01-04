import React from "react";
import "./LandingZone.css";


interface ILandingZone {

}

export const LandingZone: React.FC<ILandingZone> = () => {
    return (
        <div className="landZoneMainContainer">
            <div className="landZoneContentContainer">
                <div>
                    <h1 className="helloMsg">Hello</h1>
                </div>
                <div className="typewriter">
                    <h1>I am a web developer</h1>
                </div>
            </div>
        </div>
    )
};