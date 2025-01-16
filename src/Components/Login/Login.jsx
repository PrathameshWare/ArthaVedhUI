import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css'; // Import the CSS
import Logo from '../../assets/ArthaPATH-Logo.png';

const Login = () => {
    const [userId, setUserId] = useState(""); // State to store the user input
    const [error, setError] = useState(""); // State to handle errors
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Reset any previous errors
        console.log(userId);
        try {
            const response = await fetch("https://env-4565208.cloudjiffy.net/ops/user-login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: userId }), // Send the entered userId to the API
            });

            const data = await response.json();
            if (data.httpResponseCode === 200) {
                // On success, navigate to the OTP page and pass userId as state
                navigate("/otp", { state: { userId } });
                console.log(data);
                console.log("success");
            } else {
                setError(data.message || "Invalid User");
                console.log(error);
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo-sec">
                    <img className="logo-img" src={Logo} alt="Logo" />
                    <h1 className="app-name">arthaPATH</h1>
                </div>
                <h2 className="sign-in-text">Sign In</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="user-id" className="input-label">User ID or Email Address</label>
                    <input
                        type="text"
                        id="user-id"
                        className="input-field"
                        placeholder="Enter your User ID or Email"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <p className="info-text">One-time login password will be sent to this email Id</p>
                    {error && <p className="error-text">{error}</p>}
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
