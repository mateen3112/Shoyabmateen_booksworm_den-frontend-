import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from "../assets/logo/logo.png";
import {jwtDecode} from "jwt-decode";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const navigate = useNavigate();

  const checkAuth = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        jwtDecode(token);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Invalid token:", error);
        sessionStorage.removeItem("token");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  };

  const fetchWishlistCount = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const response = await axios.get('https://shoyabmateen-booksworm-den-backend.onrender.com/wishlist', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setWishlistCount(response.data.wishlist.length);
      } catch (error) {
        console.error("Error fetching wishlist count:", error);
      }
    }
  };

  useEffect(() => {
    checkAuth();
    fetchWishlistCount();
    const handleStorageChange = (event) => {
      if (event.key === "token") {
        checkAuth();
        fetchWishlistCount();
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const token = sessionStorage.getItem('token');
      await axios.post('https://shoyabmateen-booksworm-den-backend.onrender.com/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      sessionStorage.removeItem("token");
      setIsLoggedIn(false);
      setWishlistCount(0); // Reset wishlist count on logout
      navigate("/home");
    } catch (error) {
      console.error("Error logging out:", error);
      // Optional: Display an error message to the user
    }
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50"
      style={{ background: "linear-gradient(to right, #5f2c82, #49a09d)", color: "#bd9f67" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="The book Valut Logo" className="w-auto h-16 text-yellow-600" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-gray-100 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-gray-100 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                }
              >
                Wishlist {isLoggedIn && <span>({wishlistCount})</span>}
              </NavLink>
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "text-gray-100 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                }
              >
                My Orders
              </NavLink>
              {isLoggedIn ? (
                <>
                  {/* <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? "text-white"
                        : "text-gray-100 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                    }
                  >
                    Profile
                  </NavLink> */}
                  <button
                    onClick={handleLogout}
                    className="bg-pink-500 text-white hover:bg-pink-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white"
                      : "bg-pink-500 text-white hover:bg-pink-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                  }
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-100 hover:text-white focus:outline-none transition duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden transition duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-gray-100 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-gray-100 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              }
            >
              Wishlist {isLoggedIn && <span>({wishlistCount})</span>}
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "text-gray-100 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              }
            >
              My-orders
            </NavLink>

            {isLoggedIn ? (
              <>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white"
                      : "text-gray-100 hover:bg-orange-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                  }
                >
                  Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="bg-pink-500 text-white hover:bg-pink-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-white"
                    : "bg-pink-500 text-white hover:bg-pink-600 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
