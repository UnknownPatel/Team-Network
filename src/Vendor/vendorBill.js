import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorBill = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("button1");

  function toggleContent(buttonId) {
    setActiveButton(buttonId);
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      {/* Sidebar */}
      <div className="fixed flex flex-col bottom-0 left-0 w-16 md:w-60 bg-indigo-50 h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div className="text-white md:text-gray-800">Vendor Name</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow pb-14">
          <ul className="flex flex-col py-4 space-y-1 bottom-buttons">
            <li className="px-5">
              <div className="flex flex-row items-center h-1">
                <div className="text-sm font-light tracking-wide text-black">
                  {/* Menu */}
                </div>
              </div>
            </li>
            <li>
              <a
                href="/vendorDashboard"
                className="relative flex flex-row items-center h-11 focus:outline-none  hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=2x&id=114317&format=png"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  Profile
                </span>
              </a>
            </li>
            <li>
              <a
                href="/vendor_onBanch"
                className="relative flex flex-row items-center h-11 focus:outline-none  hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=2x&id=qyuCliR6aPQn&format=png"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  On-Bench Resources
                </span>
              </a>
            </li>
            <li>
              <a
                href="/vendor_onBoard"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=2x&id=w0H8y8MA9iGe&format=png"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  On-Boarded Resources
                </span>
              </a>
            </li>
            <li>
              <a
                href="/vendor_bill"
                className="relative flex flex-row items-center h-11 focus:outline-none bg-indigo-100 hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=2x&id=wvnwiFvlIcWG&format=png"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  Billing
                </span>
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={handleLogout}
          className="absolute bottom-4 w-full flex flex-row items-center  h-11 focus:outline-none hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
        >
          <span className="inline-flex justify-center items-center ml-4">
            <img
              className="w-5 h-5"
              src="https://img.icons8.com/?size=2x&id=KqSCl2qqIUJL&format=png"
            ></img>
          </span>
          {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
          <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
            Logout
          </span>
        </button>
      </div>
      {/* Main */}
      <section className="body-font ml-16 md:ml-60 ">
        <div>
          <p className="bg-indigo-50 p-4">Welcome !!</p>
        </div>
        <div className="text-center text-4xl mt-5">Billing</div>
        <hr />
        <div className="flex justify-center mt-5 space-x-4 mb-5">
          <button
            className={`bg-indigo-200  font-bold py-2 px-4 rounded-lg ${
              activeButton === "button1" ? "bg-indigo-500" : ""
            }`}
            onClick={() => toggleContent("button1")}
          >
            Invoice Details
          </button>
          <button
            className={`bg-indigo-200  font-bold py-2 px-4 rounded-lg ${
              activeButton === "button2" ? "bg-indigo-500" : ""
            }`}
            onClick={() => toggleContent("button2")}
          >
            History
          </button>
        </div>
        {/* 1 */}
        <div
          id="content1"
          className={`min-w-full p-4 rounded-lg ${
            activeButton === "button1" ? "block" : "hidden"
          }`}
        >
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="p-8">
                <div className="flex ml-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Name Of Developer: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Name of Developer"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Tech Stack: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Tech Stack"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Selected Month and Year: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Selected Month and Year"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Date of Invoice: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Date Of Invoice"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Invoice Number: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Invoice Number"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">No. of Working Days: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="No. of Working Days"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Total Leaves: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Total Leaves"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Amount: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Amount"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">GST: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="GST %"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">TDS: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="TDS"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Payable Amount: </label>
                    <input
                      type="text"
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Payable Amount"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button
                    type="submit"
                    className="bg-indigo-400  p-2 rounded font-semibold  hover:bg-green-700 shadow-md cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div
          id="content2"
          className={`min-w-full p-4 rounded-lg ${
            activeButton === "button2" ? "block" : "hidden"
          }`}
        >
          <div className="flex ml-2">
            <div
              id="block_report_viewport"
              className="flex flex-col mt-2 max-h-fit px-3"
            >
              <div>
                <div id="table-viewport" className="mt-5">
                  <div className="border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="sticky top-0 bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Developer Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Tech Stack
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Month and Year
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Date Of Invoice
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Working Days
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Total Leaves
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            GST
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            TDS
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Payable Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"></td>
                          <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"></td>
                          <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap"></td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center"></td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                            {/* <button
                              className="text-green-500 font-semibold"
                              // onClick={() => handleAccept(vendor.id)}
                            >
                              Accept
                            </button> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorBill;
