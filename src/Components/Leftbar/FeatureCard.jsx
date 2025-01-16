import React from 'react';
import '../../styles/featurecard.css';

const FeatureCard = ({ feature = [] }) => {
  const handleFeatureClick = (clickedFeature) => {
    console.log(`https://api.example.com/feature/${clickedFeature.api}`);
    window.alert(`You just hit : https://api.example.com/feature/${clickedFeature.api}`);
  };

  return (
    <div className="feature-card">
      <ul>
        {feature.map((feature) => (
          <li key={feature.title} onClick={() => handleFeatureClick(feature)}>
            <i className={`fas fa-${feature.icon}`} />
            {feature.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
