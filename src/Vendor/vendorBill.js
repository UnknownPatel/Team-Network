import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BillPopUp from "./billPopUp";

const VendorBill = () => {
  const navigate = useNavigate();
  const { agencyId } = useParams();
  const [bills, setBills] = useState([]);
  const [listOnBoard, setListOnBoard] = useState([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [developerId, setDeveloperId] = useState("");
  const [agency_id, setAgency_id] = useState("");
  const [activeButton, setActiveButton] = useState("button1");
  const [name, setName] = useState("");
  const [techStack, setTechStack] = useState("");
  const [monthAndYear, setMonthAndYear] = useState("");
  const [dateOfInvoice, setDateOfInvoice] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [workingDays, setWorkingDays] = useState("");
  const [leaves, setLeaves] = useState("");
  const [amount, setAmount] = useState("");
  const [cgst, setCGst] = useState("");
  const [sgst, setSGst] = useState("");
  const [tds, setTDS] = useState("");
  const [payableAmount, setPayableAmount] = useState("");

  const [selectedBill, setSelectedBill] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/v1/developers`)
      .then((response) => {
        console.log(response);
        const filteredDevelopers = response.data.on_board_developer.filter(
          (developer) => developer.agency_id === Number(agencyId)
        );
        setListOnBoard(filteredDevelopers);
      })
      .catch((error) => console.log(error));

    axios
      .get(`/api/v1/bills`)
      .then((response) => {
        console.log(response);
        setBills(response.data.bills);
      })
      .catch((error) => console.log(error));

    const parsedAmount = parseFloat(amount) || 0;
    const parsedCGst = parseFloat(cgst) || 0;
    const parsedSGst = parseFloat(sgst) || 0;
    const parsedTDS = parseFloat(tds) || 0;

    const calculatedPayableAmount =
      parsedAmount + parsedCGst + parsedSGst - parsedTDS;
    setPayableAmount(calculatedPayableAmount.toFixed(2));
  }, [amount, cgst, sgst, tds]);

  const handleNameChange = (e) => {
    const selectedEmail = e.target.value;
    const selectedDev = listOnBoard.find((dev) => dev.email === selectedEmail);
    setSelectedDeveloper(selectedDev);
    setDeveloperId(selectedDev.id);
    setName(selectedDev.name);
    setTechStack(selectedDev.tech_stack);
    setAgency_id(selectedDev.agency_id);
  };

  // const handleAmountChange = (e) => {
  //   setAmount(e.target.value);
  // };

  // const handleCGSTChange = (e) => {
  //   setCGst(e.target.value);
  // };

  // const handleSGSTChange = (e) => {
  //   setSGst(e.target.value);
  // };

  // const handleTDSChange = (e) => {
  //   setTDS(e.target.value);
  // };

  const handleSubmit = (e) => {
    axios
      .post("/api/v1/bills", {
        bill: {
          name: name,
          tech_stack: techStack,
          select_duration: monthAndYear,
          working_days: workingDays,
          total_leaves: leaves,
          cgst: cgst,
          sgst: sgst,
          tds: tds,
          invoice_date: dateOfInvoice,
          invioce_number: invoiceNo,
          amount: amount,
          due_date: dueDate,
          total_amount: payableAmount,
          agency_id: agency_id,
        },
      })
      .then((responce) => {
        console.log(responce.data);
        setTimeout(() => {
          window.location.reload(true);
        }, 2000);
      })
      .catch(function (err) {
        console.log(err.message);
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
                href={`/vendor_bill/${agencyId}`}
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
                    <select
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      onChange={handleNameChange}
                    >
                      <option value="Select Examination">
                        Select Name Of Developer
                      </option>
                      {listOnBoard.map((developer_name) => {
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
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Tech Stack"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Selected Month and Year: </label>
                    <input
                      type="date"
                      onChange={(e) => setMonthAndYear(e.target.value)}
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Selected Month and Year"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Date of Invoice: </label>
                    <input
                      type="date"
                      onChange={(e) => setDateOfInvoice(e.target.value)}
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
                      onChange={(e) => setInvoiceNo(e.target.value)}
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
                      onChange={(e) => setWorkingDays(e.target.value)}
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
                      onChange={(e) => setLeaves(e.target.value)}
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
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Amount"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">CGST: </label>
                    <select
                      id="countries"
                      value={cgst}
                      onChange={(e) => setCGst(e.target.value)}
                      className=" border border-gray-400  text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                    >
                      <option value="select">Select CGST</option>
                      <option value="9">9 %</option>
                      <option value="18">18 %</option>
                    </select>
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">SGST: </label>
                    <select
                      id="countries"
                      value={sgst}
                      onChange={(e) => setSGst(e.target.value)}
                      className=" border border-gray-400  text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
                    >
                      <option value="select">Select SGST</option>
                      <option value="9">9 %</option>
                      <option value="18">18 %</option>
                    </select>
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">TDS: </label>
                    <input
                      type="text"
                      value={tds}
                      onChange={(e) => setTDS(e.target.value)}
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="TDS"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Due Date: </label>
                    <input
                      type="date"
                      onChange={(e) => setDueDate(e.target.value)}
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Date Of Invoice"
                    />
                  </div>
                </div>
                <div className="flex ml-2 mt-2">
                  <div className="flex items-center flex-1">
                    <label className="flex-1">Payable Amount: </label>
                    <input
                      type="text"
                      value={payableAmount}
                      readOnly
                      className="w-96 form-input border border-gray-400 rounded p-1"
                      placeholder="Payable Amount"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <button
                    type="submit"
                    onClick={handleSubmit}
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
          <div className="flex ml-2 justify-center">
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
                            Payable Amount
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
                        {bills.map((bill) => (
                          <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                              {bill.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                              {bill.tech_stack}
                            </td>
                            <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                              {bill.total_amount}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                              {bill.payment_status}
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
                          <BillPopUp
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorBill;
