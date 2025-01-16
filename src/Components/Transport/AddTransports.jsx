import React, { useState } from "react";
import "../../styles/Add.css"; // Import the CSS
import Sidebar from "../Sidebar/Sidebar";
import LogoutButton from "../Logout/LogoutButton";
import { Link } from "react-router-dom";

const AddTransport = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex-container h-screen">
      <Sidebar />
      <LogoutButton />
      <div className="main-content">
        <div className="header">
          <p>
            <Link
              to="/view-transport"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Transports
            </Link>
          </p>
        </div>
        <h2 className="header-title">Add Transport</h2>
        <p className="basic-details">Transport Details</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="transportName"
                name="transportName"
                required
              />
              <label htmlFor="transportName" className="floating-label">
                Transport Name <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <select
                id="transportType"
                name="transportType"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="TCP">TCP (Transmission Control Protocol)</option>
                <option value="UDP">UDP (User Datagram Protocol)</option>
              </select>
              <label htmlFor="transportType" className="floating-label">
                Transport Type<span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                id="transportDir"
                name="transportDir"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="Inbound">Inbound</option>
                <option value="Outbound">Outbound</option>
              </select>
              <label htmlFor="accountType" className="floating-label">
                Transport Dir<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <select
                id="accountType"
                name="accountType"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="HTTP">HTTP (Hypertext Transfer Protocol)</option>
                <option value="HTTPS">HTTPS (HTTP Secure)</option>
              </select>
              <label htmlFor="accountType" className="floating-label">
                Transport Protocol
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <textarea
                className="floating-input"
                id="transportProperties"
                name="transportProperties"
                rows="3" // Adjust the number of rows as needed
                required
              ></textarea>
              <label htmlFor="transportProperties" className="floating-label">
                Transport Properties
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="status"
                name="status"
                className="floating-input"
                value="NEW" // This will always show "NEW"
                readOnly // Prevents the user from editing it
              />
              <label htmlFor="status" className="floating-label">
                Status <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="button">
              <Link to="/view-transport">Cancel</Link>
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransport;
