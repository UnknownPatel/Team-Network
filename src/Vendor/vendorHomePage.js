import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorHomePage = () => {
  const [agencies, setAgencies] = useState([]);
  const viewNav = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/v1/dashboards`)
      .then((response) => {
        const filteredAgencies = response.data.agencies.filter(
          (agency) => agency.registration === true
        );
        console.log(filteredAgencies);
        setAgencies(filteredAgencies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpen = (agencyId) => {
    // e.preventDefault();
    // const agency_id = e.target.id;
    viewNav(`/vendorDashboard/${agencyId}`);
    console.log(agencyId);
  };

  return (
    <div>
      <section className="body-font">
        <div>
          <p className="bg-indigo-50 p-4">Welcome !!</p>
        </div>
        <div className="text-center text-4xl mt-5">List of Agency</div>
        <div
          id="agency_viewport"
          className="flex justify-center mt-2 max-h-fit px-3"
        >
          <div id="table-viewport" className="mt-5">
            <div className="border rounded-lg">
              <table className="w-full divide-y divide-gray-200">
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
                      Agency Name
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
                  {agencies.map((agency, index) => {
                    return (
                      <tr key={agency.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {agency.agency_name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          <button
                            className="text-green-500 font-semibold"
                            id={agency.id}
                            onClick={(e) => handleOpen(agency.id)}
                          >
                            Open
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorHomePage;
