

import React, { useState } from "react";
import API from "../axiosConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("Login Successful!");
      navigate("/"); // Redirect to home after login
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-nearTeal  h-screen flex items-center justify-center">
      <div className="bg-nearTeal p-6 rounded-lg shadow-lg w-[30%]">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block text-xl">Email</label>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required className="w-full p-2 border rounded"/>
          </div>
          <div className="mt-4">
            <label className="block text-xl">Password</label>
            <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required className="w-full p-2 border rounded"/>
          </div>
          <button type="submit" className="bg-green-500 text-white w-full mt-4 p-2 rounded text-xl">Login</button>
        </form>
      </div>
    </div>
  );
}
