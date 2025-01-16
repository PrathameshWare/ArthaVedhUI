import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import LogoutButton from "../Logout/LogoutButton";

const ViewTransportSummary = () => {
  const [view, setView] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 20;

  const allCustomers = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    transportName: `Transport ${index + 1}`,
    transportType: index % 2 === 0 ? "Public" : "Private",
    transportDir: `Direction ${index + 1}`,
    transportProtocol: index % 2 === 0 ? "TCP" : "UDP",
    status: index % 2 === 0 ? "Active" : "Inactive",
    pendingStatus: "-",
    createDate: `${21 + (index % 5)}-Aug-24`,
    modifiedDate: `${21 + (index % 5)}-Sep-24`,
    lastAccessedDate: `${22 + (index % 5)}-Sep-24`,
  }));

  const pendingCustomers = Array.from({ length: 25 }, (_, index) => ({
    id: index + 1,
    transportName: `Pending Transport ${index + 1}`,
    transportType: "Private",
    transportDir: `Direction ${index + 1}`,
    transportProtocol: "UDP",
    status: "New",
    pendingStatus: "Pending",
    createDate: `${24 + (index % 5)}-Aug-24`,
    modifiedDate: `${25 + (index % 5)}-Aug-24`,
    lastAccessedDate: `${26 + (index % 5)}-Aug-24`,
  }));

  const handleButtonClick = (viewType) => {
    setView(viewType);
    setCurrentPage(1);
  };

  const displayedData = view === "all" ? allCustomers : pendingCustomers;
  const totalRecords = displayedData.length;
  const totalPages = Math.ceil(totalRecords / customersPerPage);
  const startIndex = (currentPage - 1) * customersPerPage;
  const currentCustomers = displayedData.slice(
    startIndex,
    startIndex + customersPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startRecord = startIndex + 1;
  const endRecord = Math.min(startIndex + customersPerPage, totalRecords);

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <LogoutButton />

      <div className="flex-grow flex flex-col p-5 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Transports</h1>

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
          <Link to="/add-transport">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-sm hover:bg-blue-950">
              Add Transport
            </button>
          </Link>
        </div>

        <div className="flex-grow overflow-auto">
          <table className="min-w-full border border-white">
            <thead>
              <tr className="bg-blue-950 text-white">
                <th className="p-2 border border-white">Transport Id</th>
                <th className="p-2 border border-white">Transport Name</th>
                <th className="p-2 border border-white">Transport Type</th>
                <th className="p-2 border border-white">Transport Dir</th>
                <th className="p-2 border border-white">Transport Protocol</th>
                <th className="p-2 border border-white">Status</th>
                <th className="p-2 border border-white">Pending Status</th>
                <th className="p-2 border border-white">Create Date</th>
                <th className="p-2 border border-white">Modified Date</th>
                <th className="p-2 border border-white">Last Accessed Date</th>
              </tr>
            </thead>
            <tbody>
              {currentCustomers.map((transport) => (
                <tr key={transport.id} className="bg-white text-black">
                  <td className="p-2 border border-white">{transport.id}</td>
                  <td className="p-2 border border-white">
                    {transport.transportName}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.transportType}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.transportDir}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.transportProtocol}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.status}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.pendingStatus}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.createDate}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.modifiedDate}
                  </td>
                  <td className="p-2 border border-white">
                    {transport.lastAccessedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-4 text-black">
          <span>
            Showing {startRecord} - {endRecord} of {totalRecords} records
          </span>
          <span>
            {currentPage} of {totalPages}
          </span>
        </div>

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

export default ViewTransportSummary;
