import React, { useState } from "react";
import "../../styles/Add.css"; // Import the CSS
import Sidebar from "../Sidebar/Sidebar";
import LogoutButton from "../Logout/LogoutButton";
import { Link } from "react-router-dom";

const AddAccount = () => {
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuVisible(!submenuVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex-container h-auto">
      <Sidebar />
      <LogoutButton />
      <div className="main-content">
        <div className="header">
          <p>
            <Link
              to="/view-account"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Accounts
            </Link>
          </p>
        </div>
        <h2 className="header-title">Add Account</h2>
        <p className="basic-details">General Account Details</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="accountNumber"
                name="accountNumber"
                required
              />
              <label htmlFor="accountNumber" className="floating-label">
                Account Number <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <select
                id="customerId"
                name="customerId"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="CUST1001">CUST1001</option>
                <option value="CUST1002">CUST1002</option>
              </select>
              <label htmlFor="customerId" className="floating-label">
                Customer Id <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="accountName"
                name="accountName"
                required
              />
              <label htmlFor="accountName" className="floating-label">
                Account Name 
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
                <option value="Savings Account">Savings Account</option>
                <option value="Current Account">Current Account</option>
              </select>
              <label htmlFor="accountType" className="floating-label">
                Account Type <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                id="accountSubType"
                name="accountSubType"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="Savings Account">Regular Savings</option>
                <option value="Current Account">Premium Savings</option>
              </select>
              <label htmlFor="accountSubtype" className="floating-label">
                Account Subtype 
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
                Status 
              </label>
            </div>
          </div>

          <h3 className="address-header">Bank and Financial Details</h3>

          <div className="form-row">
            <div className="form-group">
              <select
                id="customerId"
                name="customerId"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="001-234-567">001-234-567</option>
                <option value="002-345-678">002-345-678</option>
              </select>
              <label htmlFor="customerId" className="floating-label">
                Physical Account Id 
              </label>
            </div>
            <div className="form-group">
              <select
                id="customerId"
                name="customerId"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="003-456-789">003-456-789</option>
                <option value="004-567-890">004-567-890</option>
              </select>
              <label htmlFor="customerId" className="floating-label">
                Parent Account Id 
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="accountBankBIC"
                name="accountBankBIC"
                required
              />
              <label htmlFor="accountBankBIC" className="floating-label">
                Account Bank BIC 
              </label>
            </div>
            <div className="form-group">
              <select
                id="accountbankNCCType"
                name="accountbankNCCType"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="National Bank (N)">National Bank (N)</option>
                <option value="Private Bank (P)">Private Bank (P)</option>
              </select>
              <label htmlFor="accountbankNCCType" className="floating-label">
                Account Bank NCC Type
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="accountBankNCC"
                name="accountBankNCC"
                required
              />
              <label htmlFor="accountBankNCC" className="floating-label">
                Account Bank NCC 
              </label>
            </div>
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="accountIBAN"
                name="accountIBAN"
                required
              />
              <label htmlFor="accountIBAN" className="floating-label">
                Account IBAN 
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                id="accountCurrency"
                name="accountCurrency"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="INR">Indian Rupee (INR)</option>
                <option value="USD">United States Dollar (USD)</option>
                <option value="GBP">British Pound (GBP)</option>
              </select>
              <label htmlFor="customerId" className="floating-label">
                Account Currency 
              </label>
            </div>
            <div className="form-group">
              <select
                id="customerId"
                name="customerId"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="IN">IN - India</option>
                <option value="US">US - United States</option>
                <option value="GB">GB - United Kingdom</option>
              </select>
              <label htmlFor="customerId" className="floating-label">
                Account Country 
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                id="accountstatementFormat"
                name="accountstatementFormat"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="PDF">PDF</option>
                <option value="HTML">HTML</option>
                <option value="CSV">CSV</option>
              </select>
              <label
                htmlFor="accountstatementFormat"
                className="floating-label"
              >
                Account Statement Format 
              </label>
            </div>
            <div className="form-group">
              <select
                id="accountStatementSource"
                name="accountStatementSource"
                className="floating-dropdown"
                defaultValue="" // Ensures the dropdown is empty initially
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="Bank Portal">Bank Portal</option>
                <option value="Email">Email</option>
                <option value="ATM">ATM</option>
              </select>
              <label
                htmlFor="accountStatementSource"
                className="floating-label"
              >
                Account Statement Source 
              </label>
            </div>
          </div>

          <div className="checkbox-label-wrapper">
            <input
              type="checkbox"
              id="virtualAccount"
              name="virtualAccount"
              className="floating-checkbox"
            />
            <label htmlFor="virtualAccount" className="floating-label-virtual ">
              Virtual Account
            </label>
          </div>

          <div className="form-actions">
            <button type="button">
              <Link to="/view-account">Cancel</Link>
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
