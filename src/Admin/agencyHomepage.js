import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AgencyHomepage = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const { agency_name, agency_id } = useParams();
  useEffect(() => {
    console.log(agency_id);
    console.log(agency_name);
    axios
      .get(`/api/v1/dashboards`)
      .then((response) => {
        console.log(response);
        const data = response.data;
        const filteredAgencies = data.vendors.filter(
          (vendor) => vendor.registration === false
        );
        setVendors(filteredAgencies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAccept = async (vendorId) => {
    try {
      await axios
        .put(`/api/v1/dashboards/${vendorId}/approve_request`)
        .then((response) => {
          console.log(response);
          toast.success(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          axios
            .get(`/api/v1/dashboards`)
            .then((response) => {
              console.log(response);
              const data = response.data;
              const filteredAgencies = data.vendors.filter(
                (vendor) => vendor.registration === false
              );
              setVendors(filteredAgencies);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error approving agency request:", error);
    }
  };

  const handleDecline = async (vendorId) => {
    try {
      await axios
        .delete(`/api/v1/dashboards/${vendorId}/decline_request`)
        .then((response) => {
          console.log(response);
          toast.success(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          axios
            .get(`/api/v1/dashboards`)
            .then((response) => {
              console.log(response);
              const data = response.data;
              const filteredAgencies = data.vendors.filter(
                (vendor) => vendor.registration === false
              );
              setVendors(filteredAgencies);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error approving agency request:", error);
    }
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
                className="relative flex flex-row items-center h-11 focus:outline-none bg-indigo-100 hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
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
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Sr.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Vendor Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Email Id
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Mobile No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {vendors.map((vendor, index) => (
                      <tr key={vendor.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {vendor.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {vendor.user.email}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {vendor.mobile_number}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          <button
                            className="text-green-500 font-semibold"
                            // id={"button-agency-" + agency.id}
                            onClick={() => handleAccept(vendor.id)}
                          >
                            Accept
                          </button>
                          <button
                            className="text-red-500 font-semibold ml-5"
                            onClick={() => handleDecline(vendor.id)}
                          >
                            Decline
                          </button>
                        </td>
                      </tr>
                    ))}
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

export default AgencyHomepage;
