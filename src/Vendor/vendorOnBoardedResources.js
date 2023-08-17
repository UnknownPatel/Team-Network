import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VendorOnBoardedResources = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("button1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [techStack, setTechStack] = useState("");
  const [experience, setExperience] = useState("");
  const [joining, setJoining] = useState("");
  const [amount, setAmount] = useState("");
  const [gst, setGst] = useState("");
  const [dateOfOnBoarding, setDateOfOnBoarding] = useState("");
  const [contract, setContract] = useState("");
  const [budget, setBudget] = useState("");
  const [cv, setCv] = useState("");
  const [aadhaarcard, setAadhaarcard] = useState("");
  const [formData, setFormData] = useState({
    agency: {
      name: "",
      email: "",
      tech_stack: "",
      experience: "",
      joining: "",
      on_bench: false,
      amount: "",
      gst: "",
      date_of_on_boarding: "",
      contract_period: "",
      budget: "",
      upload_cv: "",
      aadhaarcard: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("developer[name]", name);
    formData.append("developer[tech_stack]", techStack);
    formData.append("developer[experience]", experience);
    formData.append("developer[joining]", joining);

    axios
      .put(`/api/v1/developers`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          toast.success(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          position: toast.POSITION.BOTTOM_LEFT,
          theme: "colored",
        });
      });
  };

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
                className="relative flex flex-row items-center h-11 focus:outline-none bg-indigo-100 hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
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
        <div className="text-center text-4xl mt-5">On Boarded Resources</div>
        <hr />
        <div className="flex justify-center mt-5 space-x-4 mb-5">
          <button
            className={`bg-indigo-200  font-bold py-2 px-4 rounded-lg ${
              activeButton === "button1" ? "bg-indigo-500" : ""
            }`}
            onClick={() => toggleContent("button1")}
          >
            Add Developer
          </button>
          <button
            className={`bg-indigo-200  font-bold py-2 px-4 rounded-lg ${
              activeButton === "button2" ? "bg-indigo-500" : ""
            }`}
            onClick={() => toggleContent("button2")}
          >
            Developer List
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
              <form>
                <div className="p-8">
                  <div className="flex ml-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Name Of Developer: </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={formData.tech_stack}
                        onChange={(e) => setTechStack(e.target.value)}
                        className="w-96 form-input border border-gray-400 rounded p-1"
                        placeholder="Tech Stack"
                      />
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Experience: </label>
                      <input
                        type="text"
                        value={formData.experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-96 form-input border border-gray-400 rounded p-1"
                        placeholder="Experience"
                      />
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Budget: </label>
                      <select
                        id="countries"
                        value={formData.budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className=" border border-gray-400  text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                      >
                        <option value="select Budget">Select Budget</option>
                        <option value="monthly">Monthly</option>
                        <option value="hourly">Hourly</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Amount: </label>
                      <input
                        type="text"
                        value={formData.amount}
                        onChange={(e) => setAmount(e.target.value)}
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
                        value={formData.gst}
                        onChange={(e) => setGst(e.target.value)}
                        className="w-96 form-input border border-gray-400 rounded p-1"
                        placeholder="GST"
                      />
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Date Of On Boarding: </label>
                      <input
                        type="text"
                        value={formData.date_of_on_boarding}
                        onChange={(e) => setDateOfOnBoarding(e.target.value)}
                        className="w-96 form-input border border-gray-400 rounded p-1"
                        placeholder="Date Of On Boarding"
                      />
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Contract Period: </label>
                      <select
                        id="countries"
                        value={formData.contract_period}
                        onChange={(e) => setContract(e.target.value)}
                        className=" border border-gray-400  text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                      >
                        <option value="select">Select Contract Period</option>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Upload CV: </label>
                      <input
                        type="file"
                        value={formData.upload_cv}
                        onChange={(e) => {
                          setCv(e.target.files[0]);
                        }}
                        className="w-96 form-input border border-gray-400 rounded p-1"
                      />
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Upload Adhar Card: </label>
                      <input
                        type="file"
                        value={formData.aadhaarcard}
                        onChange={(e) => {
                          setAadhaarcard(e.target.files[0]);
                        }}
                        className="w-96 form-input border border-gray-400 rounded p-1"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center mt-5">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="bg-indigo-500 text-gray-100 p-2 rounded font-semibold  hover:bg-green-700 shadow-md cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
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
          <div className="flex ml-2"></div>
        </div>
      </section>
    </div>
  );
};

export default VendorOnBoardedResources;
