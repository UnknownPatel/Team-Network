import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OnBanchResources = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const { agency_name, agency_id } = useParams();
  const [user_id, setVendorId] = useState("");
  const [listOnBench, setListOnBench] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`/api/v1/agencies/${agency_id}/agency_vendors`)
      .then((response) => {
        console.log(response);
        // const data = response.data;
        // const filteredAgencies = data.vendors.filter(
        //   (vendor) => vendor.registration === false
        // );
        setVendors(response.data.agency_vendors);
        console.log(response.data.agency_vendors);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNameChange = (e) => {
    const selectedDeveloperId = e.target.value;
    console.log(selectedDeveloperId);
    setVendorId(selectedDeveloperId);
  };

  const handleSubmit = (e) => {
    axios
      .get(`/api/v1/developers`, {
        params: { user_id, agency_id },
      })
      .then((response) => {
        console.log(response);
        setListOnBench(response.data.on_bench_devloper);
        console.log(response.data.on_bench_devloper);
      })
      .catch((err) => {
        console.log(err);
      });
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
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
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
                className="relative flex flex-row items-center h-11 focus:outline-none bg-indigo-100 hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
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
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
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
        <div className="text-center text-4xl mt-5">List of Vendor</div>
        <div id="block_report_viewport" className="flex mt-5 max-h-fit px-3">
          <label>select Vendor :-</label>

          <select
            className="w-96 form-input border border-gray-400 rounded p-1"
            onChange={handleNameChange}
          >
            <option value="Select Examination">Select Name Of Vendor</option>
            {vendors.map((developer_name) => {
              return (
                <option
                  key={developer_name.id}
                  value={developer_name.user_id}
                  id={developer_name.id}
                >
                  {developer_name.name}, {developer_name.user.email}
                </option>
              );
            })}
          </select>
          {/* <label className="ml-10">select Skill :-</label>
          <select
            id="underline_select"
            className="block p-2 ml-5 w-60 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-800 appearance-none dark:text-gray-400 dark:border-gray-800 focus:outline-none focus:ring-0 focus:border-gray-800 peer"
          >
            <option value="">Choose Skill</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select> */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-500 ml-10 p-2 rounded font-semibold  hover:bg-green-700 shadow-md cursor-pointer"
          >
            Submit
          </button>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4">Resource Name</th>
                <th className="py-2 px-4">Tech Stack</th>
                <th className="py-2 px-4">Experience</th>
                <th className="py-2 px-4">Budget</th>
              </tr>
            </thead>
            <tbody>
              {listOnBench.map((dev) => (
                <tr className="bg-gray-50" key={dev.id}>
                  <td className="py-2 px-4 text-center">{dev.name}</td>
                  <td className="py-2 px-4 text-center">{dev.tech_stack}</td>
                  <td className="py-2 px-4 text-center">{dev.experience}</td>
                  <td className="py-2 px-4 text-center">{dev.budget_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default OnBanchResources;
