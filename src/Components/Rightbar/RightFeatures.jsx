import React from 'react';
import '../../styles/RightFeatures.css';

const RightFeatures = ({ feature = [] }) => {
    const handleFeatureClick = (clickedFeature) => {
        console.log(`https://api.example.com/feature/${clickedFeature.api}`);
        window.alert(`You just hit : https://api.example.com/feature/${clickedFeature.api}`);
    };

    return (
        <div className="feature-card-right z-50">
            <ul>
                {feature.map((feature) => (
                    <li key={feature.title} onClick={() => handleFeatureClick(feature)} className="feature-item">
                        <i className={`fas fa-${feature.icon}`} />
                        {feature.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightFeatures;