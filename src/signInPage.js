import React, { useState } from "react";
import login from "./Images/screenshot.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

var agency_id;
var agency_name;

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/v1/users/login`, {
        grant_type: "password",
        email: email,
        password: password,
        client_id: "AdXR7vRUNEjyi8-1RIgP6a6wtmUgbkMQtpZ-whDHFI4",
        client_secret: "fzXjJC3gFR8MhB78m7fb-g7SlceTCU-Mhn0ZpL4vplc",
      })
      .then((response) => {
        console.log(response);
        const role = response.data.role;
        localStorage.setItem("roles", role);
        const accessToken = response.data.access_token;
        localStorage.setItem("access_token", accessToken);

        console.log(agency_id);
        console.log(agency_name);
        if (response.data.role.includes("superadmin")) {
          toast.success("Login Successfully !!", {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          navigate("/superAdminDashboard");
        } else if (response.data.role.includes("admin")) {
          const agency_name = response.data.agency.agency_name;
          const agency_id = response.data.agency.id;
          toast.success("Login Successfully !!", {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          navigate(`/${agency_id}/${agency_name}/agencyHomePage`);
        } else if (response.data.role.includes("vendor")) {
          toast.success("Login Successfully !!", {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "colored",
          });
          navigate("/vendor_homePage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="font-mono h-screen flex items-center justify-center bg-opacity-60 backdrop-blur-lg signinimage bg-cover">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl bg-white bg-opacity-40 backdrop-blur-md rounded-lg">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                style={{
                  backgroundImage: `url(${login})`,
                }}
              ></div>
              <div className="w-full lg:w-1/2 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
                <form className="px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="username"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="******************"
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Sign In
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-600 align-baseline hover:text-blue-800"
                      to="/signUpPage"
                    >
                      Create an Account!
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-600 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
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

export default SignInPage;
