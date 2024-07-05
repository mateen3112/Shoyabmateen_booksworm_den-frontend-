import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { HomeIcon, BookOpenIcon, UsersIcon,ShoppingCartIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem('token');
      await axios.post('http://localhost:8000/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      sessionStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      // Optional: Display an error message to the user
    }
  };

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="h-screen border border-black py-8 px-4 fixed md:w-64 w-48"
      style={{ background: "linear-gradient(to bottom, #243137, #000000)", color: "#bd9f67" }}
    >
      <nav>
        <ul>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-4 flex items-center justify-center"
          >
            <h1 style={{ fontFamily: "Times New Roman", color: "#4793AF" }} className="text-3xl font-bold mb-2">Admin</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-2" fill="none" viewBox="0 0 24 24" stroke="#DD5746">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4"
          >
            <NavLink
              to="/stat"
              className="block py-2 px-4 rounded hover:bg-gray-700 text-lg font-semibold ml-5 mb-3 flex items-center"
              activeclassname="bg-gray-700"
              style={{ fontFamily: "Times New Roman", color: "#DD5746" }}
            >
              <HomeIcon className="w-6 h-6 mr-3 text-[#DD5746]" /> Statistics
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4"
          >
            <NavLink
              to="/dashboard/book"
              className="block py-2 px-4 rounded hover:bg-gray-700 text-lg font-semibold ml-5 mb-3 flex items-center"
              activeclassname="bg-gray-700"
              style={{ fontFamily: "Times New Roman", color: "#DD5746" }}
            >
              <BookOpenIcon className="w-6 h-6 mr-3 text-[#DD5746]" /> Add a Book
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-4"
          >
            <NavLink
              to="/customerdashboard"
              className="block py-2 px-4 rounded hover:bg-gray-700 text-lg font-semibold ml-5 mb-3 flex items-center"
              activeclassname="bg-gray-700"
              style={{ fontFamily: "Times New Roman", color: "#8B322C" }}
            >
              <UsersIcon className="w-6 h-6 mr-3 text-[#8B322C]" /> Customers Data
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4"
          >
            <NavLink
              to="/bookdata"
              className="block py-2 px-4 rounded hover:bg-gray-700 text-lg font-semibold ml-5 mb-3 flex items-center"
              activeclassname="bg-gray-700"
              style={{ fontFamily: "Times New Roman", color: "#DD5746" }}
            >
              <BookOpenIcon className="w-6 h-6 mr-3 text-[#DD5746]" /> Books Data
            </NavLink>
            <NavLink
              to="/buyingmodules"
              className="block py-2 px-4 rounded hover:bg-gray-700 text-lg font-semibold ml-5 mb-3 flex items-center"
              activeclassname="bg-gray-700"
              style={{ fontFamily: "Times New Roman", color: "#DD5746" }}
            >
              <ShoppingCartIcon className="w-6 h-6 mr-3" /> Buying Data
            </NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button
              onClick={handleLogout}
              className="block py-2 px-4 rounded hover:bg-gray-700 text-lg font-semibold ml-5 flex items-center"
              style={{ fontFamily: "Times New Roman", color: '#4793AF' }}
            >
              Logout
            </button>
          </motion.li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
