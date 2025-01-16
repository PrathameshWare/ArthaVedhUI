import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import LogoutButton from "../Logout/LogoutButton";

const EditCustomer = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex-container h-auto">
      <Sidebar />
      <LogoutButton />
      <div className="main-content">
        <div className="header">
          <a
            href="#"
            onClick={() =>
              (window.location.href = "View-Summary-Customer.html")
            }
          >
            Customers
          </a>
        </div>
        <h2 className="header-title">TATA MOTORS</h2>

        {/* Customer Details */}
        <p className="basic-details">Customer Details</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="customerId"
                name="customerId"
                required
                className="floating-input"
              />
              <label htmlFor="customerId" className="floating-label">
                Customer Id
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="customerName"
                name="customerName"
                className="floating-input"
                required
              />
              <label htmlFor="customerName" className="floating-label">
                Customer Name
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                id="parentCustomerId"
                name="parentCustomerId"
                className="floating-dropdown"
                required
              >
                <option value="TATA SONS">TATA SONS</option>
              </select>
              <label htmlFor="parentCustomerId" className="floating-label">
                Parent Customer Id
              </label>
            </div>
            <div className="form-group">
              <select
                id="legalIdType"
                name="legalIdType"
                className="floating-dropdown"
                required
              >
                <option value="" disabled hidden>
                  Select Legal Id Type
                </option>
                <option value="UDYAM AADHAR">UDYAM AADHAR</option>
                <option value="GSTR">GSTR</option>
              </select>
              <label htmlFor="legalIdType" className="floating-label">
                Legal Id Type
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="legalId"
                name="legalId"
                required
                className="floating-input"
              />
              <label htmlFor="legalId" className="floating-label">
                Legal Id
              </label>
            </div>
          </div>

          {/* Address Details */}
          <p className="address-header">Address Details</p>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="addressLine1"
                name="addressLine1"
                className="floating-input"
                required
              />
              <label htmlFor="addressLine1" className="floating-label">
                Address Line-1
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="addressLine2"
                name="addressLine2"
                className="floating-input"
              />
              <label htmlFor="addressLine2" className="floating-label">
                Address Line-2
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="city"
                name="city"
                className="floating-input"
                required
              />
              <label htmlFor="city" className="floating-label">
                City
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="state"
                name="state"
                className="floating-input"
                required
              />
              <label htmlFor="state" className="floating-label">
                State
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="floating-input"
                required
              />
              <label htmlFor="pincode" className="floating-label">
                Pincode
              </label>
            </div>
            <div className="form-group">
              <select
                id="country"
                name="country"
                className="floating-dropdown"
                value="India"
                required
              >
                <option value="India">India</option>
                <option value="US">US</option>
              </select>
              <label htmlFor="country" className="floating-label">
                Country
              </label>
            </div>
          </div>

          {/* Additional Details */}
          <p className="basic-details">Additional Details</p>
          <div className="form-row">
            <div className="form-group">
              <select
                id="status"
                name="status"
                className="floating-dropdown"
                required
              >
                <option value="Active">Active</option>
              </select>
              <label htmlFor="status" className="floating-label">
                Status
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="pendingStatus"
                name="pendingStatus"
                className="floating-input"
                required
              />
              <label htmlFor="pendingStatus" className="floating-label">
                Pending Status
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                id="createDate"
                name="createDate"
                /* value="21-Aug-2024"*/
                required
                className="floating-input"
              />
              <label htmlFor="createDate" className="floating-label">
                Create Date
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="modifiedDate"
                name="modifiedDate"
                /*value="21-Aug-2024"*/
                required
                className="floating-input"
              />
              <label htmlFor="modifiedDate" className="floating-label">
                Modified Date
              </label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="lastAccessedDate"
                name="lastAccessedDate"
                /*value="22-Sept-2024"*/
                required
                className="floating-input"
              />
              <label htmlFor="lastAccessedDate" className="floating-label">
                Last Accessed Date
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button type="submit">Edit</button>
            <button type="button" onClick={() => window.history.back()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;
