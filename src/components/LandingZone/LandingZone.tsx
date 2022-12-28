import React from "react";
import "./LandingZone.css";


interface ILandingZone {

}

export const LandingZone: React.FC<ILandingZone> = () => {
    return (
        <div className="landZoneMainContainer">
            <div className="landZoneContentContainer">
                <div className="typewriter">
                    <h1>Hi I am a...</h1>
                </div>
            </div>
        </div>
    )
};