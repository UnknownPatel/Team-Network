import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AgencyBillPopup from "./agencyBillPopup";

const AdminBill = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [billList, setBillList] = useState([]);
  const [user_id, setVendorId] = useState("");
  const { agency_name, agency_id } = useParams();
  const [hidden, setHidden] = useState(true);

  const [selectedBill, setSelectedBill] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
    setHidden(true);
    const selectedDeveloperId = e.target.value;
    console.log(selectedDeveloperId);
    setVendorId(selectedDeveloperId);
  };

  const handleSubmit = (e) => {
    axios
      .get(`/api/v1/bills`, {
        params: { user_id },
      })
      .then((response) => {
        console.log(response);
        setBillList(response.data.bills);
        setHidden(false);
        // console.log(response.data.on_bench_devloper);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-500 ml-10 p-2 rounded font-semibold  hover:bg-green-700 shadow-md cursor-pointer"
          >
            Submit
          </button>
        </div>

        <div
          id="block_report_viewport"
          className={`${
            hidden ? "hidden" : "flex"
          } flex flex-col mt-2 max-h-fit px-3`}
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
                        Payable Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Due Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {billList.map((bill) => (
                      <tr key={bill.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {bill.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {bill.total_amount}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {bill.due_date}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          <select
                            className="w-auto form-input border border-gray-400 rounded p-1"
                            // onChange={handleNameChange}
                          >
                            <option value="Select Status">Select Status</option>
                            <option value="pending">Pending</option>
                            <option value="inProcess">IN Process</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          <button
                            onClick={() => {
                              setSelectedBill(bill);
                              setIsPopupOpen(true);
                            }}
                            className="mt-2 bg-indigo-500 text-white rounded px-2 py-1"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                    {isPopupOpen && selectedBill && (
                      <AgencyBillPopup
                        bill={selectedBill}
                        onClose={() => setIsPopupOpen(false)}
                      />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminBill;
