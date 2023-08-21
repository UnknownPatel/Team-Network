import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VendorOnBoardedResources = () => {
  const navigate = useNavigate();
  const [listOnBench, setListOnBench] = useState([]);
  const [listOnBoard, setListOnBoard] = useState([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [developerId, setDeveloperId] = useState("");

  const { agencyId } = useParams();
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
    developer: {
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

  useEffect(() => {
    axios
      .get(`/api/v1/developers`)
      .then((response) => {
        console.log(response);
        setListOnBench(response.data.on_bench_devloper);
        const filteredDevelopers = response.data.on_board_developer.filter(
          (developer) => developer.agency_id === Number(agencyId)
        );
        setListOnBoard(filteredDevelopers);
        console.log(filteredDevelopers);
      })
      .catch((error) => console.log(error));

    // axios
    //   .get(`/api/v1/developers`)
    //   .then((response) => {
    //     console.log(response);
    //     console.log(response.data.on_board_devloper);
    //   })
    //   .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("developer[budget]", budget);
    formData.append("developer[amount]", amount);
    formData.append("developer[gst]", gst);
    formData.append("developer[date_of_on_boarding]", dateOfOnBoarding);
    formData.append("developer[contract_period]", contract);
    formData.append("developer[on_bench]", "false");
    formData.append("developer[upload_cv]", cv);
    formData.append("developer[aadhaarcard]", aadhaarcard);
    formData.append("developer[agency_id]", agencyId);
    // formData.append("developer[]");

    axios
      .put(`/api/v1/developers/${developerId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          window.location.reload(true);
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

  const handleNameChange = (e) => {
    const selectedEmail = e.target.value;
    const selectedDev = listOnBench.find((dev) => dev.email === selectedEmail);
    setSelectedDeveloper(selectedDev);
    setDeveloperId(selectedDev.id);
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
                href={`/vendorDashboard/${agencyId}`}
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
                href={`/vendor_onBanch/${agencyId}`}
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
                href={`/vendor_onBoard/${agencyId}`}
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
                href={`/vendor_bill/${agencyId}`}
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
                      <select
                        className="w-96 form-input border border-gray-400 rounded p-1"
                        onChange={handleNameChange}
                      >
                        <option value="Select Examination">
                          Select Name Of Developer
                        </option>
                        {listOnBench.map((developer_name) => {
                          return (
                            <option value={developer_name.email}>
                              {developer_name.name}, {developer_name.email}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Tech Stack: </label>
                      <input
                        type="text"
                        value={
                          selectedDeveloper ? selectedDeveloper.tech_stack : ""
                        }
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
                        value={
                          selectedDeveloper ? selectedDeveloper.experience : ""
                        }
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
                      <select
                        id="countries"
                        value={formData.gst}
                        onChange={(e) => setGst(e.target.value)}
                        className=" border border-gray-400  text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                      >
                        <option value="select">Select GST</option>
                        <option value="0">0</option>
                        <option value="9">9 %</option>
                        <option value="18">18 %</option>
                      </select>
                      {/* <input
                        type="text"
                        value={formData.gst}
                        onChange={(e) => setGst(e.target.value)}
                        className="w-96 form-input border border-gray-400 rounded p-1"
                        placeholder="GST"
                      /> */}
                    </div>
                  </div>
                  <div className="flex ml-2 mt-2">
                    <div className="flex items-center flex-1">
                      <label className="flex-1">Date Of On Boarding: </label>
                      <input
                        type="date"
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
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Name
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
                            Experience
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Joining
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Budget
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
                        {listOnBoard.map((developer) => (
                          <tr key={developer.id}>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {developer.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                              {developer.tech_stack}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                              {developer.experience}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                              {developer.joining}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                              {developer.email}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                              {developer.budget_amount}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                              <button
                                className="text-green-500 font-semibold"
                                // id={"button-agency-" + agency.id}
                                // onClick={() => handleAccept(agency.id)}
                              >
                                Accept
                              </button>
                              <button
                                className="text-red-500 font-semibold ml-5"
                                // onClick={() => handleDecline(agency.id)}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorOnBoardedResources;
