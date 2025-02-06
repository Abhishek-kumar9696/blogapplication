// // import React from "react";
// // import { Form } from "react-router-dom";

// // export default function Login() {
// //   return (
// //     <div className="bg-orange-400 h-screen p-1">
// //       <div className="container w-[40%] p-4 mt-28">
// //         <div className="">
// //           <form>
// //             <div className="form-group ">
// //               <label for="exampleInputEmail1" className="my-3">Email address</label>
// //               <input
// //                 type="email"
// //                 className="form-control"
// //                 id="exampleInputEmail1"
// //                 aria-describedby="emailHelp"
// //                 placeholder="Enter email"
// //               />
// //               <small id="emailHelp" className="form-text text-muted">
// //                 {/* We'll never share your email with anyone else. */}
// //               </small>
// //             </div>
// //             <div className="form-group my-3">
// //               <label for="exampleInputPassword1" className="my-3">Password</label>
// //               <input
// //                 type="password"
// //                 className="form-control"
// //                 id="exampleInputPassword1"
// //                 placeholder="Password"
// //               />
// //             </div>
// //             <div className="form-group form-check">
// //               {/* <input
// //                 type="checkbox"
// //                 className="form-check-input"
// //                 id="exampleCheck1"
// //               /> */}
// //               {/* <label className="form-check-label" for="exampleCheck1">
// //                 Check me out
// //               </label> */}
// //             </div>
// //             <button type="submit" className="btn btn-primary">
// //               Login
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import API from "../axiosConfig";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/login", formData);
//       localStorage.setItem("token", res.data.token);
//       alert("Login Successful!");
//       navigate("/"); // Redirect to blogs after login
//     } catch (error) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="bg-orange-400 h-screen flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-[30%]">
//         <h2 className="text-2xl font-bold text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mt-4">
//             <label className="block">Email</label>
//             <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required className="w-full p-2 border rounded"/>
//           </div>
//           <div className="mt-4">
//             <label className="block">Password</label>
//             <input type="password" name="password" placeholder="Enter password" onChange={handleChange} required className="w-full p-2 border rounded"/>
//           </div>
//           <button type="submit" className="bg-blue-500 text-white w-full mt-4 p-2 rounded">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }


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
