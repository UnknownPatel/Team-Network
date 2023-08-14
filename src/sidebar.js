import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the sidebar on larger screens (desktop)
  const closeSidebar = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  // Attach a resize event listener to close the sidebar when resizing to larger screens
  useEffect(() => {
    window.addEventListener("resize", closeSidebar);

    return () => window.removeEventListener("resize", closeSidebar);
  }, []);

  return (
    <div className="relative">
      {/* Hamburger menu (icon) for smaller screens */}
      <div
        className="lg:hidden fixed z-10 top-5 right-5 p-2 rounded-md bg-gray-800 text-white cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Sidebar content */}
      <div
        className={`lg:w-72 lg:block fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? "w-72" : "w-0"
        }`}
      >
        <p className="text-3xl text-center mt-2">Super Admin</p>
        {/* Sidebar items */}
        <ul className="py-8">
          <li className="pl-4 py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-4 py-2"></li>
          <li className="pl-4 py-2"></li>
          {/* Add more items as needed */}
        </ul>
      </div>

      {/* Semi-transparent overlay to close the sidebar on click */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
