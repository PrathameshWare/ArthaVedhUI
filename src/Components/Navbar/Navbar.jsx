import React, { useState } from "react";
import html2canvas from "html2canvas";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaSearch, FaSearchengin, FaRegCopy } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { LuAlarmClock } from "react-icons/lu";
import { GoScreenFull } from "react-icons/go";
import { IoCameraOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { TbBulbFilled, TbCloudPlus } from "react-icons/tb";
import { CiVideoOn } from "react-icons/ci";
import { PiChartLineUp } from "react-icons/pi";
import SearchModal from "./SearchModal.jsx";
import IndicatorModal from "./IndicatorModal";
import AlertModal from "./AlertModal.jsx";
import SearchToolModal from "./SearchToolModal.jsx";
import userLogo from "../../assets/logo.png";
import Tooltip from "@mui/material/Tooltip";

// Navbar component
function Navbar({ setCompanyName }) {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isIndicatorModalOpen, setIsIndicatorModalOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isSearchToolModalOpen, setIsSearchToolModalOpen] = useState(false);
  const [isCameraOptionsOpen, setIsCameraOptionsOpen] = useState(false);
  const [isPublishDropdownOpen, setIsPublishDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("CHOOSE OPTION");

  const handleInputClick = () => setIsSearchModalOpen(true);
  const handleCloseSearchModal = (newCompanyName) => {
    setCompanyName(newCompanyName); // Update the company name here
    setIsSearchModalOpen(false); // Close the modal
    console.log("Company Name Set:", newCompanyName); // This should log the correct company name
  };
  const handleIndicatorClick = () => setIsIndicatorModalOpen(true);
  const handleCloseIndicatorModal = () => setIsIndicatorModalOpen(false);
  const handleAlertClick = () => setIsAlertModalOpen(true);
  const handleCloseAlertModal = () => setIsAlertModalOpen(false);
  const handleCategoryClick = () => setIsCategoryOpen(!isCategoryOpen);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsCategoryOpen(false);
  };
  const handleSearchToolClick = () => setIsSearchToolModalOpen(true);
  const handleCloseSearchToolModal = () => setIsSearchToolModalOpen(false);
  const handleFullscreenClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  const handleCameraOptionsClick = () =>
    setIsCameraOptionsOpen(!isCameraOptionsOpen);
  const handleDownloadImage = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "screenshot.png";
      link.click();
    });
  };
  const handleCopyImage = () => {
    html2canvas(document.body).then((canvas) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const item = new ClipboardItem({ "image/png": blob });
          navigator.clipboard.write([item]).then(
            () => console.log("Image copied to clipboard!"),
            (err) => console.error("Failed to copy image to clipboard:", err)
          );
        }
      });
    });
  };
  const togglePublishDropdown = () =>
    setIsPublishDropdownOpen(!isPublishDropdownOpen);

  return (
    <nav className="bg-black p-2 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={userLogo}
            alt="User Logo"
            className="rounded-full w-9 h-9 mr-6"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                onClick={handleInputClick}
                className="pl-9 p-1.5 text-sm rounded-full text-white bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <FaSearch className="absolute left-3 text-gray-400 text-sm" />
            </div>

            <Tooltip
              title="Timeline"
              arrow
              componentsProps={{
                tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
              }}
            >
              <div className="relative hover:bg-gray-600 rounded-md transition-colors duration-200 z-50 ">
                <button
                  onClick={() => setIsTimelineOpen(!isTimelineOpen)}
                  className="text-white focus:outline-none flex items-center p-1.5"
                >
                  <span className="mr-1 text-sm">Timeline</span>
                  <IoIosArrowDropdownCircle />
                </button>
                {isTimelineOpen && (
                  <div className="absolute right-0 mt-2 w-auto p-1 bg-black rounded-sm shadow-lg ">
                    <a
                      href="#option1"
                      className="block px-1 py-1 text-white hover:bg-gray-700"
                      onClick={() => setIsTimelineOpen(false)} // Close dropdown
                    >
                      1 M
                    </a>
                    <a
                      href="#option2"
                      className="block px-1 py-1 text-white hover:bg-gray-700"
                      onClick={() => setIsTimelineOpen(false)} // Close dropdown
                    >
                      1 W
                    </a>
                    <a
                      href="#option3"
                      className="block px-1 py-1 text-white hover:bg-gray-700"
                      onClick={() => setIsTimelineOpen(false)} // Close dropdown
                    >
                      1 Hr
                    </a>
                  </div>
                )}
              </div>
            </Tooltip>

            <Tooltip
              title="Indicators"
              arrow
              componentsProps={{
                tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
              }}
            >
              <div>
                <a
                  href="#indicator-template"
                  className="text-white text-sm hover:bg-gray-600 rounded-md transition-colors duration-200 p-1.5 flex items-center z-50"
                  onClick={handleIndicatorClick}
                >
                  <PiChartLineUp className="text-xl text-white cursor-pointer mr-1 z-50" />
                  Indicators
                </a>
              </div>
            </Tooltip>

            <Tooltip
              title="Indicator Category"
              className="flex"
              arrow
              componentsProps={{
                tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
              }}
            >
              <div className="relative flex items-center space-x-2 hover:bg-gray-600 rounded-md transition-colors duration-200 p-1.5">
                <BiCategoryAlt
                  className="text-xl text-white cursor-pointer"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                />
                {/* Display selected option */}

                {isCategoryOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-56 w-36 bg-black rounded-sm shadow-lg py-2 z-50">
                    {[
                      "Template 1",
                      "Template 2",
                      "Template 3",
                      "Template 4",
                    ].map((option) => (
                      <a
                        key={option}
                        href={`#${option}`}
                        className="block px-2 py-2 text-white hover:bg-gray-700"
                        onClick={() => {
                          setSelectedOption(option); // Set selected option
                          setIsCategoryOpen(false); // Close the dropdown
                        }}
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-sm text-gray-300 flex mt-2">
                {selectedOption !== "CHOOSE OPTION" ? selectedOption : ""}
              </span>
            </Tooltip>

            <Tooltip
              title="Alerts"
              arrow
              componentsProps={{
                tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
              }}
            >
              <div className="flex items-center">
                <a
                  href="#alerts"
                  className="text-white cursor-pointer text-sm flex items-center hover:bg-gray-600 rounded-md transition-colors duration-200 p-1.5"
                  onClick={handleAlertClick}
                >
                  <LuAlarmClock className="text-xl mr-1" />
                  Alerts
                </a>
              </div>
            </Tooltip>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Tooltip
            title="Quick Search"
            arrow
            componentsProps={{
              tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
            }}
          >
            <div>
              <FaSearchengin
                className="text-xl text-white cursor-pointer"
                onClick={handleSearchToolClick}
              />
            </div>
          </Tooltip>

          <Tooltip
            title="Chart Settings"
            arrow
            componentsProps={{
              tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
            }}
          >
            <div>
              <IoSettingsOutline className="text-xl text-white cursor-pointer" />
            </div>
          </Tooltip>

          <Tooltip
            title="Fullscreen"
            arrow
            componentsProps={{
              tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
            }}
          >
            <div>
              <GoScreenFull
                className="text-xl text-white cursor-pointer"
                onClick={handleFullscreenClick}
              />
            </div>
          </Tooltip>

          <Tooltip
            title="Take Snapshot"
            arrow
            componentsProps={{
              tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
            }}
          >
            <div>
              <IoCameraOutline
                className="text-xl text-white cursor-pointer"
                onClick={handleCameraOptionsClick}
              />
            </div>
          </Tooltip>

          <Tooltip
            title="Publish Your Ideas"
            arrow
            componentsProps={{
              tooltip: { sx: { bgcolor: "gray", fontSize: "0.875rem" } },
            }}
          >
            <div>
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
                onClick={togglePublishDropdown}
              >
                Publish
              </button>
            </div>
          </Tooltip>
        </div>
      </div>

      {isPublishDropdownOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-black rounded-sm shadow-lg py-2 z-50">
          <a
            href="#publish-idea"
            className="flex items-center px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
          >
            <TbBulbFilled className="text-2xl mr-2" />
            <div className="flex flex-col text-sm">
              <span>Publish idea</span>
              <span className="text-gray-400 text-xs">
                Share your next big trade
              </span>
            </div>
          </a>
          <a
            href="#record-video"
            className="flex items-center px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
          >
            <CiVideoOn className="text-2xl mr-2" />
            <div className="flex flex-col text-sm">
              <span>Record video idea</span>
              <span className="text-gray-400 text-xs">
                Create market-moving videos
              </span>
            </div>
          </a>
          <a
            href="#speak-mind"
            className="flex items-center px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
          >
            <TbCloudPlus className="text-2xl mr-2" />
            <div className="flex flex-col text-sm">
              <span>Speak your mind</span>
              <span className="text-gray-400 text-xs">
                Write public notes about your favorite symbols
              </span>
            </div>
          </a>
        </div>
      )}

      {isSearchModalOpen && (
        <SearchModal
          showModal={isSearchModalOpen}
          onClose={handleCloseSearchModal}
          setCompanyName={setCompanyName}
        />
      )}

      {isIndicatorModalOpen && (
        <IndicatorModal
          showModal={isIndicatorModalOpen}
          onClose={handleCloseIndicatorModal}
        />
      )}
      {isAlertModalOpen && (
        <AlertModal
          showModal={isAlertModalOpen}
          onClose={handleCloseAlertModal}
        />
      )}
      {isSearchToolModalOpen && (
        <SearchToolModal
          showModal={isSearchToolModalOpen}
          onClose={handleCloseSearchToolModal}
        />
      )}
      {isCameraOptionsOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-black rounded-sm shadow-lg py- z-50">
          <span className="ml-2 text-gray-500">Chart Snapshot</span>
          <a
            href="#download"
            className="block px-2 py-2 text-white hover:bg-gray-700"
            onClick={handleDownloadImage}
          >
            <div className="flex items-center space-x-4">
              <IoMdDownload className="ml-2 mr-2" /> Download Image
            </div>
          </a>
          <a
            href="#copy"
            className="block px-2 py-2 text-white hover:bg-gray-700"
            onClick={handleCopyImage}
          >
            <div className="flex items-center space-x-4">
              <FaRegCopy className="ml-2 mr-2" /> Copy Image
            </div>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
