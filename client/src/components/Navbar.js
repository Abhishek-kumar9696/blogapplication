

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../axiosConfig";
import Modal from "./Modal";

export default function Navbar() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get("/getallblogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);
  const [clickedImg, setClickedImg] = useState(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    alert("Logout successfully");
    navigate("/");
  };
  const handleClick = (blog) => {
    setClickedImg(blog.image);
  };
  // Format date function (DD/MM/YYYY HH:mm)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <>
      {/* Navbar */}

      <div className="bg-customTT">
        <nav className="navbar navbar-expand-lg navbar-light bg-nearTeal flex justify-between items-center px-6 py-4 shadow-md">
          <Link to="/" className="text-3xl font-bold text-white ">
            Blog
          </Link>
          <div>
            {token ? (
              <>
                <Link
                  to="/createblog"
                  className="mx-3 text-white hover:underline text-2xl"
                >
                  Create Blog
                </Link>
                <button
                  onClick={handleLogout}
                  className="mx-3 text-white hover:underline text-2xl "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mx-3 text-white hover:underline text-2xl "
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="mx-3 text-white hover:underline text-2xl"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        {/* <div className="flex flex-col md:flex-row items-center bg-lime-300 p-6">
          <img
            className="m-4 w-[100%] h-[500px] rounded-lg shadow-lg"
            src="https://res.cloudinary.com/dpums0sgp/image/upload/v1738850265/uploads/pngelqvot2ew17yzo54s.jpg"
            alt="logo"
          />
          <div className="my-6">
            <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
            <p className="text-gray-600">Created by . . . . .</p>
          </div>
        </div> */}

        {/* Blog List */}
        <div className="container mx-auto px-6">
          {blogs.length === 0 ? (
            <p className="text-red-500 mt-6">No blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex md:flex-row border rounded-lg p-4 mt-4 bg-nearTeal shadow-sm"
              >
                {/* Image on the left */}
                <div className="flex-none w-[500px] h-[400px] bg-gray-400 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full bg-slate-100 transition-all hover:scale-110 hover:opacity-80"
                    src={blog.image || "https://via.placeholder.com/400x400"} // Use placeholder image if blog image is not available
                    alt="Blog"
                    onClick={() => handleClick(blog)}
                  />
                </div>

                {/* Blog content on the right */}
                <div className="   ml-20  ">
                  <div className="flex-1 pl-4">
                    <h2 className=" text-black text-5xl font-semibold ">
                      {blog.title}
                    </h2>
                    <p className="text-white text-3xl ">{blog.content}</p>
                    <p className="text-white text-sm mt-2">
                      By {blog.author || blog.user?.username} on{" "}
                      {formatDate(blog.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            setClickedImg={setClickedImg} // Ensure this function is passed to Modal
          />
        )}
      </div>
    </>
  );
}
