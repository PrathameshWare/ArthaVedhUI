import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchToolModal({ showModal, onClose }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative my-6 mx-auto bg-gray-600 outline-none focus:outline-none rounded-lg"
              style={{ width: '500px', height: '700px' }}
            >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-gray-600 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t relative">
                  <h3 className="text-3xl font-semibold text-white">
                    Search Tool or Function
                  </h3>
                  <button
                    className="absolute top-2 right-2 p-1 bg-transparent border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-2 flex-auto w-full">
                  <div className="relative flex items-center w-full mb-4">
                    <input
                      type="text"
                      placeholder=""
                      className="pl-10 p-2 w-full bg-transparent text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <FaSearch className="absolute left-3 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-center h-full">
                    <h3 className="text-md font-semibold text-white text-center mb-28">
                      Type to search for drawings, functions and settings
                    </h3>
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
