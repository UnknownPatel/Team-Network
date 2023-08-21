import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const AgencyProfile = () => {
  const navigate = useNavigate();
  const { agency_name, agency_id } = useParams();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      {/* Sidebar */}
      <div className="fixed flex flex-col bottom-0 left-0 w-16 md:w-60 bg-indigo-50 h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div className="text-white md:text-gray-800">{agency_name}</div>
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
                href={`/${agency_id}/${agency_name}/agencyHomePage`}
                className="relative flex flex-row items-center h-11 focus:outline-none  hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=2x&id=l4CaydjNAcFK&format=png"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  Vendor Request
                </span>
              </a>
            </li>
            <li>
              <a
                href={`/${agency_id}/${agency_name}/listOfVendor`}
                className="relative flex flex-row items-center h-11 focus:outline-none  hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=2x&id=3QIxrhRd81U1&format=png"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  List of Vendors
                </span>
              </a>
            </li>
            <li>
              <a
                href={`/${agency_id}/${agency_name}/agency_onBanch`}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="https://img.icons8.com/?size=2x&id=qyuCliR6aPQn&format=png"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  On-bench Resources
                </span>
              </a>
            </li>
            <li>
              <a
                href={`/${agency_id}/${agency_name}/agency_onBoard`}
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
                href={`/${agency_id}/${agency_name}/admin_bill`}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
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
            <li>
              <a
                href={`/${agency_id}/${agency_name}/agencyProfile`}
                className="relative flex flex-row items-center h-11 focus:outline-none bg-indigo-100 hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
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
        <div className="text-center text-4xl mt-5">Profile</div>
        {/* <div className=" mt-5">
          <div class="flex flex-wrap justify-center">
            <div class="w-full p-4">
              <div class="bg-white rounded-lg shadow-md">
                <div>Concern Person Name:</div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="max-w-md mx-auto mt-5 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              <div className="md:flex-shrink-0">
                <label htmlFor="">Upload Logo:</label>
                {/* <img
                className="h-48 w-full object-cover md:w-48"
                src="upload_logo_url_here"
                alt="Upload Logo"
              /> */}
              </div>

              <div className="mt-10 flex  leading-tight text-sm font-semibold">
                <label htmlFor="" className="flex-1">
                  personName:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Person Name"
                  className="w-80 p-2 ml-2 flex-1 flex rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div className=" mt-5 text-sm flex leading-tight font-semibold ">
                <label htmlFor="" className="flex-1">
                  position:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="position "
                  className="w-80 p-2 ml-2 flex  flex-1 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="flex mt-5 text-sm leading-tight font-semibold ">
                <label htmlFor="" className="flex-1">
                  Mobile No:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Mobile Number"
                  className="w-80 p-2 ml-2 flex flex-1 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="flex mt-5 text-sm leading-tight font-semibold ">
                <label htmlFor="" className="flex-1">
                  Email Id:
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Id"
                  className="w-80 p-2 ml-2 flex flex-1 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgencyProfile;
