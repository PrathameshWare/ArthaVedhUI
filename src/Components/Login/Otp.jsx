import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import Logo from '../../assets/ArthaPATH-Logo.png';
import '../../styles/otp.css'; // Import the CSS file

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // OTP input fields
  const [error, setError] = useState(""); // State to handle errors
  const location = useLocation(); 
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Move focus to the next input box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpString = otp.join(""); // Combine the OTP array into a string
    setError(""); // Reset error
    console.log(otpString);
    try {
      const response = await axios.post("https://env-4565208.cloudjiffy.net/ops/user-otp-validation", {
        otp: otpString
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      if (data.businessStatusCode === 2) {
         navigate("/landing-page");
         console.log(data);
      } else {
        setError(data.message || "Invalid OTP");
      }
    } catch (err) {
      setError("An error occurred while validating OTP. Please try again.");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        {/* First Image (Logo) */}
        <div className="logo-container">
          <img src={Logo} alt="ArthaPATH Logo" className="logo" />
        </div>
        
        {/* Second Text Image */}
        <h3 className="text-center" id='nametag'>arthaPATH</h3>

        {/* OTP Form */}
        <h4 className="text-center">Verify OTP</h4>
        <p className="text-center">
          Enter OTP sent to email id <br />
          "ayush@arthaved"
        </p>
        
        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              type="text"
              name="otp"
              maxLength="1"
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              className="otp-input"
            />
          ))}
        </div>

        <p className="text-center" id='last-text'>Resend OTP in: 83 seconds</p>
        {error && <p className="error-text">{error}</p>}
        <button className="otp-button" onClick={handleVerifyOtp}>Verify & proceed</button>
      </div>
    </div>
  );
};

export default Otp;
