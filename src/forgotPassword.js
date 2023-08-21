import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "./Images/screenshot.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

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
                <h3 className="pt-4 text-2xl text-center">Forgot Password</h3>
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
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      // onClick={handleSubmit}
                    >
                      Send Email For Change Password
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-600 align-baseline hover:text-blue-800"
                      to="/"
                    >
                      Back To login page
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

export default ForgotPassword;
