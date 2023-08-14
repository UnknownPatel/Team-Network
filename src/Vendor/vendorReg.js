import React, { useEffect, useState } from "react";
import login from "../Images/screenshot.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

var domain;

const VendorReg = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [selectPanCard, setSelectedPanCard] = useState("");
  const [selectLicence, setSelectedLicence] = useState("");
  const [selectGST, setSelectedGSTCertificate] = useState("");
  const [formData, setFormData] = useState({});
  useEffect(() => {
    const host = window.location.host;
    domain = host.split(".")[2];
    console.log(domain);
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) {
      setIsAgencyName(arr[0] === "");
    }
    // if (arr.length > 0) {
    //   setIsSuperAdmin(arr[1] === "superadmin");
    //   setIsStudent(arr[1] === "student");
    //   setDisabled(arr[1] !== "superadmin");
    // }
  }, []);
  return (
    <div>
      <div className="font-mono min-h-screen flex items-center justify-center signinimage bg-cover">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-2/4 bg-cover rounded-l-lg"
                style={{ backgroundImage: `url(${login})` }}
              ></div>
              <div className="w-full lg:w-7/12 bg-white bg-opacity-40 backdrop-blur-md p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Vendor Register</h3>
                <form className="px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="Name"
                      >
                        Name of Concern Person:
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        // value={formData.concern_person_name}
                        // onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor=""
                      >
                        Mobile Number
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="mob"
                        // value={formData.mobile_number}
                        // onChange={(e) => setMobileNo(e.target.value)}
                        type="text"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor=""
                    >
                      Tech Stack:
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="companyName"
                      // value={formData.agency_name}
                      // onChange={(e) => setTechStack(e.target.value)}
                      type="text"
                      placeholder="Tech Stack"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0 ">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="email"
                      >
                        Email Id
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        // value={formData.email}
                        // onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter Email Id"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        // value={formData.password}
                        // onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                  </div>
                  <div className="flex mt-2 mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 flex-1"
                      htmlFor="file1"
                    >
                      Pan Card:
                    </label>
                    <input
                      type="file"
                      id="panCard"
                      // value={formData.document_pancard}
                      // onChange={(e) => setSelectedPanCard(e.target.files[0])}
                      className="w-full px-2 py-1 border rounded-lg flex-1"
                    />
                  </div>
                  <div className="flex flex-1 mb-4">
                    <label
                      className="block mb-2 flex-1 text-sm font-bold text-gray-700"
                      htmlFor="file3"
                    >
                      GST Certificate:
                    </label>
                    <input
                      type="file"
                      id="gst"
                      value={formData.document_gst}
                      onChange={(e) =>
                        setSelectedGSTCertificate(e.target.files[0])
                      }
                      className="w-full flex-1 px-2 py-1 border rounded-lg"
                    />
                  </div>
                  <div className="mb-6 mt-5 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      // onClick={handleSubmit}
                    >
                      Register
                    </button>
                  </div>

                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to="/"
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorReg;
