import React, { useState } from "react";
import axios from "axios"; // Import axios
import "../../styles/Add.css"; // Import the CSS
import Sidebar from "../Sidebar/Sidebar";
import LogoutButton from "../Logout/LogoutButton";
import { Link, useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    parentCustomerId: "",
    legalIdType: "",
    legalId: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const navigate = useNavigate(); // To navigate after submission

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      entity_type: "customers",
      columns: {
        parent_cust_id: formData.parentCustomerId,
        cust_name: formData.customerName,
        cust_addr1: formData.addressLine1,
        cust_addr2: formData.addressLine2,
        cust_addr_city: formData.city,
        cust_addr_state: formData.state,
        cust_addr_pin: formData.pincode,
        cust_addr_country: formData.country,
        cust_legal_id_type: formData.legalIdType,
        cust_legal_id: formData.legalId,
      },
      comment: "New customer added",
    };

    try {
      const response = await axios.post(
        "https://env-4565208.cloudjiffy.net/ops/ref-data/create-entity",
        requestBody
      ); // Update URL as per your API endpoint
      console.log("Customer added successfully:", response.data);

      // Redirect to view-customer page after successful submission
      navigate("/view-customer");
    } catch (error) {
      console.error("Error adding customer:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="flex-container">
      <Sidebar />
      <LogoutButton />
      <div className="main-content">
        <div className="header">
          <p>
            <Link
              to="/view-customer"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Customers
            </Link>
          </p>
        </div>
        <h2 className="header-title">Add Customer</h2>
        <p className="basic-details">Basic Details</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="customerName" className="floating-label">
                Customer Name <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <select
                id="parentCustomerId"
                name="parentCustomerId"
                className="floating-dropdown"
                value={formData.parentCustomerId}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="TATA SONS">TATA SONS</option>
                <option value="RELIANCE">RELIANCE</option>
              </select>
              <label htmlFor="parentCustomerId" className="floating-label">
                Parent Customer Id <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <select
                id="legalIdType"
                name="legalIdType"
                className="floating-dropdown"
                value={formData.legalIdType}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="UDYAM AADHAR">UDYAM AADHAR</option>
                <option value="GSTR">GSTR</option>
              </select>
              <label htmlFor="legalIdType" className="floating-label">
                Legal ID Type <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="legalId"
                name="legalId"
                value={formData.legalId}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="legalId" className="floating-label">
                Legal Id <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>

          <h3 className="address-header">Address</h3>

          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="addressLine1"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="addressLine1" className="floating-label">
                Address Line-1 <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="addressLine2"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="addressLine2" className="floating-label">
                Address Line-2 <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="city" className="floating-label">
                City <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="state" className="floating-label">
                State <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                className="floating-input"
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="pincode" className="floating-label">
                Pincode <span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <div className="form-group">
              <select
                id="country"
                name="country"
                className="floating-dropdown"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled hidden>
                  Choose an option...
                </option>
                <option value="IN">IN - India</option>
                <option value="US">US - United States</option>
                <option value="GB">GB - United Kingdom</option>
              </select>
              <label htmlFor="country" className="floating-label">
                Country <span style={{ color: "red" }}>*</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="button">
              <Link to="/view-customer">Cancel</Link>
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
