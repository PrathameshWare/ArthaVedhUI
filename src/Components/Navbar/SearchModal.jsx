// src/Components/SearchModal.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchModal({ showModal, onClose, setCompanyName }) {
 

  // Function to handle button clicks and set the company name
  const handlepass = (companyName) => {
      // Set the selected company name
    console.log("Selected company:", companyName);
    setCompanyName(companyName)
    onClose(companyName); // Close the modal
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative my-6 mx-auto bg-gray-600 outline-none focus:outline-none rounded-lg"
              style={{ width: "500px", height: "500px" }}
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-gray-600 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t relative">
                  <h3 className="text-3xl font-semibold text-white">
                    Keyword Search
                  </h3>
                  <button
                    className="absolute top-2 right-2 p-2.5 bg-transparent border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="p-6 flex flex-col items-center">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <button
                      className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      id="TCS"
                      onClick={() => handlepass("TCS")}
                    >
                      TCS
                    </button>
                    <button
                      className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      id="TATASTEEL"
                      onClick={() => handlepass("TATASTEEL")}
                    >
                      TATASTEEL
                    </button>
                    <button
                      className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      id="COALINDIA"
                      onClick={() => handlepass("COALINDIA")}
                    >
                      COALINDIA
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      id="SUNPHARMA"
                      onClick={() => handlepass("SUNPHARMA")}
                    >
                      SUNPHARMA
                    </button>
                    <button
                      className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      id="HINDLEVER"
                      onClick={() => handlepass("HINDLEVER")}
                    >
                      HINDLEVER
                    </button>
                    <button
                      className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
                      id="TISCO"
                      onClick={() => handlepass("TISCO")}
                    >
                      TISCO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
