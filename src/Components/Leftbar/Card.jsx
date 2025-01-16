import React from 'react';
import '../../styles/card.css';

function Card() {
  return (
    <div className="card">
      <div className="info">
        <button type="button" className="btn btn-outline-light">Full Name</button>
        <button type="button" className="btn btn-outline-light">Account no</button>
        <button type="button" className="btn btn-outline-light">Mobile no</button>
        <button type="button" className="btn btn-outline-light">LogOut</button>
      </div>
    </div>
  );
}

export default Card;
