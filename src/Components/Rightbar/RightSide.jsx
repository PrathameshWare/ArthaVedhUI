import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCameraRetro, faEnvelope, faLocationDot, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import features from "../../data/rfeature.json";
import '../../styles/RightSide.css';
import RightFeatures from './RightFeatures';

function RightSide() {
    const [activeFeature, setActiveFeature] = useState(null); 

    const icons = [
        { icon: faTruckFast, tooltip: "Truck Fast", feature: features.features1 },
        { icon: faTwitter, tooltip: "Twitter", feature: features.features2 },
        { icon: faEnvelope, tooltip: "Envelope", feature: features.features3 },
        { icon: faLocationDot, tooltip: "Location", feature: features.features4 },
        { icon: faCameraRetro, tooltip: "Camera Retro", feature: features.features5 },
        { icon: faUser, tooltip: "User", feature: features.features6 },
    ];

    const toggleFeatureCard = (index) => {
        setActiveFeature(prevIndex => prevIndex === index ? null : index);
    }

    return (
        <div className="z-50">
            <div className="bar-right">
                <div className="icons mt-4">
                    {icons.map((item, index) => (
                        <div className="icon-container" key={index}>
                            <FontAwesomeIcon
                                className='icon-components'
                                icon={item.icon}
                                style={{ color: "#ecedef" }}
                                onClick={() => toggleFeatureCard(index)}
                            />
                            <div className="icon-tooltip">{item.tooltip}</div>
                            {activeFeature === index && <RightFeatures feature={item.feature} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RightSide;