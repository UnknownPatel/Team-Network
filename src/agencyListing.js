import React, { useEffect, useState } from "react";
import agency from "./Images/agency.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AgencyListing = () => {
  const [agencies, setAgencies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/v1/dashboards`)
      .then((response) => {
        const data = response.data;
        const filteredAgencies = data.agencies.filter(
          (agency) => agency.registration === false
        );
        setAgencies(filteredAgencies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAccept = async (agencyId) => {
    try {
      await axios
        .put(`/api/v1/dashboards/${agencyId}/approve_request`)
        .then((response) => {
          console.log(response);
          toast.success(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          axios
            .get(`/api/v1/dashboards`)
            .then((response) => {
              const data = response.data;
              const filteredAgencies = data.agencies.filter(
                (agency) => agency.registration === false
              );
              setAgencies(filteredAgencies);
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

  const handleDecline = async (agencyId) => {
    try {
      await axios
        .delete(`/api/v1/dashboards/${agencyId}/decline_request`)
        .then((response) => {
          console.log(response);
          toast.success(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          axios
            .get(`/api/v1/dashboards`)
            .then((response) => {
              const data = response.data;
              const filteredAgencies = data.agencies.filter(
                (agency) => agency.registration === false
              );
              setAgencies(filteredAgencies);
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
    <>
      {/* <Sidebar /> */}
      <div className="fixed flex flex-col top-0 left-0 w-16 md:w-60 bg-indigo-50 h-full border-r">
        <div className="flex items-center justify-center h-14 border-b">
          <div className=" text-white md:text-gray-800">Team Netwotk</div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5">
              <div className="flex flex-row items-center h-1">
                <div className="text-sm font-light tracking-wide text-black">
                  {/* Menu */}
                </div>
              </div>
            </li>
            <li>
              <a
                href="/superAdminDashboard"
                className="relative flex flex-row items-center h-11 focus:outline-none bg-indigo-100 hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4nK2UyU9TYRTF+ZdAxQEslBY6j/T1daalUIjBgZi4NbJBpoUJcWFCoSugFEqZ4tpEF0YxRBM1uiLWkDB0pAUKHHNf0meLfc8WPclNk5vm/N73ne/euroqpWVcgzq7O661uuIqxnm/7n/I4PAMm5zevNHphSMwgKHJIJ5MBsH4+qGy2KEwszm50TJUtaHF7WdYb2DH6u0F4/Gj092N0alZTIQiGA8tYGwmjNHpeYwE5/B0ag5Dz0NoNzKQ6S1o05kh1ZjjEqVBJwhgfX07X799R1G99x7i8bMXmAgtYHwmjLHpMEaC85z58NQsHo1Owt7dh2QyydXbd5uQqPQ/BAE2XwClev9hCz0DgzDYPdDZ3NBanVBbHFB22qAwsXD4+/Dq9RvOPJVKIZPJQKIyQOQE5QDS0dERdnd3sbe3h/39fa4ODg6QSCR446J5NpvFbaVeGEB3X0nHx8e8sZj54eEhmhW62gFFyN/Mc7kcmhRaYQDT1YOi0ukMYhsvkc5k+d7JyYmoeT6fR1OHGMDj582WVteht7mxuLLG9/wDD7hwS59mq8YEh7+fM6e61a4RBlhKAKlUGgvRFSRTaVxUoVD448up6EGIAmiwqlWhUODNyZiKcropVwsDzC4fatHp6WmZOWV0Q64SBpic3rKQo2sbZSFX0tnZGW9Op7ouEwHQUisqEluDhnEgElvle139dyHTd0KqNaNFY0SL2sANFm0AMqcTNbYpRQCOLt6Mwp1fWq4YciWdn59zp2mUKqoDXFbXpB3CAFpq/6qrrSIAGqzSkBdX17nfWnSlpV0YQCu5qPDyChQmK8LRGN9zB+5w4dJKpqVGa4HefemAigK0rIv/I4U7G4lWHXJRDRK5CMDqrMkMFQEyYYDaYv/56fOXS5tvbn1EfXPbtjDAyBqUZjauNLPoMFkhN9DW/D1YF++e1gINFj1NuvsGiWy7vlmmLDX9BZiOQqxw1r4/AAAAAElFTkSuQmCC"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  Agency Listing
                </span>
              </a>
            </li>
            <li>
              <a
                href="/approvedAgencyList"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-indigo-200 text-black hover:text-gray-800 border-l-4 border-transparent pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <img
                    className="w-5 h-5"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC60lEQVR4nO2Zz2tTQRDHH/46ePTHyR//hFjsKTcp7MrOOzyUelHRnqUQLb3k1noQW6glLf4HKW8GUvWi4NGW9qIogje1J/vj3Aj1yWxfAw0vyW7evk2EDAykDcn7fGd3ZmcnQTC0oQ0tt0W16KREGBWkpiWpWCB8lQh7ktQf7Qh7AuGLfo/U9K04vFGpVE4E/TZF6opEeCYRtiRBYufqlyA1OxaHl72Dj9Wii5JgWZBq2IMfd0GqIUhVZV1e8AIvSY1LUrt5wTOE7Ig4vFMY+LXlidMC4ZVrcNkqBGGJn+UUXtblWUHqbdHw8sgR3vAz3UXeJzw1RbyLatGZ3AJ8bBvZPi+q+eDj8G6/4GXT1e2e4AHhvEDYHgABuz2VWK7zPkHvvR9vv5UQFq3g+XR0cUiZ+uTHB8nawYtk/vtku1xoyLq8ah59bg88w28m89o7iJg1gucmi/sUH/DltUfJ+sFcE56d/76ftZ0QtrhpNIn+aD8iv5nCs6gOuTDSVcBhS1ws/JP1h5mRL3eAT1dhymQFcCDhSQtY6b4C+uIxgPCkBXzuvgIWrXKn2m2asGVT+MMc2DbJAaP6//zbY2OA3JGn5grsOxHA8KYgzuDJUEC3LcQ12hTIKTyZbiGDJM6q4Rt/55KpjYnC4KVxEhuW0U4iCoEn0zJqcZC1qyxZ/2NRueBJ90NPuwrgoZPNl2athPPIU+pxeN2omRMIP12IcAkvEH4YT/O4dbV9QKsIp5EndjUTFH2hORLhHB5hX6yKS8YC0lWo9vIwTlYXCSuPR38hsLWbtejcIFzqBamdnuemPKvsuwAMo57gmyIQlvoY/ZdBXuN7qEAg/wLU69KH0qnAhfGgVQ9c/UV+1dlwt2XIW/WxbUquIp9lPKsspjqp37kT1nJuusgHTG5w5O9QC1y2A9/GpyO3Hba9k94q+jNqxvqELcLSBnCE5zbcs/PFg2926Q94Df0a4RO/xy0xd5UD8TPr0IYW/P/2D5+LFXPdole1AAAAAElFTkSuQmCC"
                  ></img>
                </span>
                {/* Add responsive classNamees to hide text for screens smaller than md breakpoint */}
                <span className="ml-2 text-sm tracking-wide truncate hidden md:inline-block">
                  Approved Agency
                </span>
              </a>
            </li>
            <li>
              <div className="p-4">
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-indigo-300 text-gray-800 hover:text-white text-sm font-semibold transition"
                  onClick={handleLogout}
                >
                  <span className="">Logout</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Main */}
      <section className="body-font ml-16 md:ml-60 ">
        <div>
          <p className="bg-indigo-50 p-4">Welcome !!</p>
        </div>
        <div className="text-center text-4xl mt-5">List of Agency</div>
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
                        Agency Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      >
                        Owner Name
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
                    {agencies.map((agency, index) => (
                      <tr key={agency.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-800 whitespace-nowrap">
                          {agency.agency_name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          {agency.concern_person_name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center">
                          <button
                            className="text-green-500 font-semibold"
                            // id={"button-agency-" + agency.id}
                            onClick={() => handleAccept(agency.id)}
                          >
                            Accept
                          </button>
                          <button
                            className="text-red-500 font-semibold ml-5"
                            onClick={() => handleDecline(agency.id)}
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
    </>
  );
};

export default AgencyListing;
