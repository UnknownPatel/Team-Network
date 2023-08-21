import React from "react";

const AgencyBillPopup = ({ bill, onClose }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded">
          <h2 className="text-xl font-semibold mb-4">Bill Detail</h2>
          {/* Display all bill details here */}
          <div className="mb-2 flex">
            <div className="w-1/2 pr-2">
              <p className="text-sm">Developer Name:</p>
              <p className="font-semibold">{bill.name}</p>
            </div>
            <div className="w-1/2 pl-2">
              <p className="text-sm">Tech Stack:</p>
              <p className="font-semibold">{bill.tech_stack}</p>
            </div>
          </div>
          <div className="mb-2">
            <p className="text-sm">Selected Month and Year:</p>
            <p className="font-semibold">{bill.select_duration}</p>
          </div>
          <div className="mb-2">
            <p className="text-sm">Invoice Date:</p>
            <p className="font-semibold">{bill.invoice_date}</p>
          </div>
          <div className="mb-2">
            <p className="text-sm">Invoice Number:</p>
            <p className="font-semibold">{bill.invioce_number}</p>
          </div>
          <div className="mb-2 flex">
            <div className="w-1/2 pr-2">
              <p className="text-sm">Working Days:</p>
              <p className="font-semibold">{bill.working_days}</p>
            </div>
            <div className="w-1/2 pl-2">
              <p className="text-sm">Total Leaves:</p>
              <p className="font-semibold">{bill.total_leaves}</p>
            </div>
          </div>
          <div className="mb-2 flex">
            <div className="w-1/3 pr-2">
              <p className="text-sm">CGST:</p>
              <p className="font-semibold">{bill.cgst}</p>
            </div>
            <div className="w-1/3 px-2">
              <p className="text-sm">SGST:</p>
              <p className="font-semibold">{bill.sgst}</p>
            </div>
            <div className="w-1/3 pl-2">
              <p className="text-sm">TDS:</p>
              <p className="font-semibold">{bill.tds}</p>
            </div>
          </div>
          <div className="mb-2 flex">
            <div className="w-1/2 pr-2">
              <p className="text-sm">Payable Amount:</p>
              <p className="font-semibold">{bill.total_amount}</p>
            </div>
            <div className="w-1/2 pl-2">
              <p className="text-sm">Status:</p>
              <p className="font-semibold">{bill.payment_status}</p>
            </div>
          </div>
          {/* ... other details */}

          <button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgencyBillPopup;
