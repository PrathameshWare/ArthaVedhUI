import React, { useState,useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import LogoutButton from "../Logout/LogoutButton";

const ViewCustomerSummary = () => {
  const [view, setView] = useState("all"); // State to manage the view
  const [currentPage, setCurrentPage] = useState(1); // State to manage the current page
  const customersPerPage = 20; // Number of customers to display per page

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('https://env-4565208.cloudjiffy.net/ops/ref-data/view-entity-list', {
  //         entity_type: 'customers',
  //         pagenumber: 1
  //       });
  //       setData(response.data); // Set the fetched data into state
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // Sample data for "All" and "Pending"
  const allCustomers = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    legalIdType: index % 2 === 0 ? "GSTN" : "PAN",
    legalId: index % 2 === 0 ? `GST${index + 1}XYZ` : `PAN${index + 1}ABC`,
    status: index % 2 === 0 ? "Active" : "Inactive",
    pendingStatus: "-",
    createDate: `${21 + (index % 5)}-Aug-24`,
    modifiedDate: `${21 + (index % 5)}-Sep-24`,
    lastAccessedDate: `${22 + (index % 5)}-Sep-24`,
  }));

  const pendingCustomers = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    name: `Pending Customer ${index + 1}`,
    legalIdType: "GSTN",
    legalId: `GSTN${index + 1}XYZ`,
    status: "New",
    pendingStatus: "Pending",
    createDate: `${24 + (index % 5)}-Aug-24`,
    modifiedDate: `${25 + (index % 5)}-Aug-24`,
    lastAccessedDate: `${26 + (index % 5)}-Aug-24`,
  }));

  // Handle button click to switch views
  const handleButtonClick = (viewType) => {
    setView(viewType);
    setCurrentPage(1); // Reset to the first page when view changes
  };

  // Choose the data to display based on the current view
  const displayedData = view === "all" ? allCustomers : pendingCustomers;

  // Calculate total pages
  const totalRecords = displayedData.length; // Total number of records
  const totalPages = Math.ceil(totalRecords / customersPerPage); // Total pages

  // Get the data for the current page
  const startIndex = (currentPage - 1) * customersPerPage; // Starting index for current page
  const currentCustomers = displayedData.slice(
    startIndex,
    startIndex + customersPerPage
  ); // Customers for current page

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of records displayed
  const startRecord = startIndex + 1; // Adjust for display (1-based index)
  const endRecord = Math.min(startIndex + customersPerPage, totalRecords); // Adjust for display

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <LogoutButton />

      <div className="flex-grow flex flex-col p-5 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Customers</h1>

        {/* Button Container */}
        <div className="flex justify-between mb-4">
          <div className="flex">
            <button
              className={`border-b-2 px-4 py-2 transition-colors ${
                view === "all"
                  ? "bg-white border-blue-500 text-black"
                  : "bg-gray-200 border-gray-90 text-black hover:bg-white"
              }`}
              onClick={() => handleButtonClick("all")}
            >
              All
            </button>
            <button
              className={`border-b-2 px-4 py-2 transition-colors ${
                view === "pending"
                  ? "bg-white border-blue-500 text-black"
                  : "bg-gray-200 text-black hover:bg-white"
              }`}
              onClick={() => handleButtonClick("pending")}
            >
              Pending
            </button>
          </div>
          <Link to="/add-customer">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-sm hover:bg-blue-950">
              Add Customer
            </button>
          </Link>
        </div>

        {/* Table Wrapper */}
        <div className="flex-grow overflow-auto">
          <table className="min-w-full border border-white">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-2 border border-white">Customer Id</th>
                <th className="p-2 border border-white">Customer Name</th>
                <th className="p-2 border border-white">
                  Customer Legal Id Type
                </th>
                <th className="p-2 border border-white">Customer Legal Id</th>
                <th className="p-2 border border-white">Status</th>
                <th className="p-2 border border-white">Pending Status</th>
                <th className="p-2 border border-white">Create Date</th>
                <th className="p-2 border border-white">Modified Date</th>
                <th className="p-2 border border-white">Last Accessed Date</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((customer) => (
                <tr key={customer.id} className="bg-white text-black">
                  <td className="p-2 border border-white">{customer.id}</td>
                  <td className="p-2 border border-white">{customer.name}</td>
                  <td className="p-2 border border-white">
                    {customer.legalIdType}
                  </td>
                  <td className="p-2 border border-white">
                    {customer.legalId}
                  </td>
                  <td className="p-2 border border-white">{customer.status}</td>
                  <td className="p-2 border border-white">
                    {customer.pendingStatus}
                  </td>
                  <td className="p-2 border border-white">
                    {customer.createDate}
                  </td>
                  <td className="p-2 border border-white">
                    {customer.modifiedDate}
                  </td>
                  <td className="p-2 border border-white">
                    {customer.lastAccessedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Info */}
        <div className="flex justify-between mt-4 text-black">
          <span>
            Showing {startRecord} - {endRecord} of {totalRecords} cases
          </span>
          <span>
            {currentPage} of {totalPages}
          </span>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-900 text-white px-4 py-2 rounded-l-sm hover:bg-blue-950 disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 ${
                currentPage === index + 1
                  ? "bg-blue-900 text-white"
                  : "bg-gray-200 text-black hover:bg-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="bg-blue-900 text-white px-4 py-2 rounded-r-sm hover:bg-blue-950 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomerSummary;
