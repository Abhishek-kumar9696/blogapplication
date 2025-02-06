// // // //

// // // import React, { useState, useEffect } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import API from "../axiosConfig";

// // // export default function CreateBlog() {
// // //   const navigate = useNavigate();
// // //   const token = localStorage.getItem("token");

// // //   useEffect(() => {
// // //     if (!token) {
// // //       navigate("/login");
// // //     }
// // //   }, [token, navigate]);

// // //   const [formData, setFormData] = useState({ title: "", content: "", author: "" });
// // //   const [image, setImage] = useState(null);
// // //   const [preview, setPreview] = useState("");
// // //   const [uploadedUrl, setUploadedUrl] = useState("");

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleFileChange = (event) => {
// // //     const file = event.target.files[0];
// // //     setImage(file);
// // //     setPreview(URL.createObjectURL(file));
// // //   };

// // //   const handleUpload = async () => {
// // //     if (!image) return alert("Please select an image.");

// // //     const formData = new FormData();
// // //     formData.append("image", image);

// // //     try {
// // //       const response = await axios.post("http://localhost:8083/upload", formData, {
// // //         headers: { "Content-Type": "multipart/form-data" },
// // //       });
// // //       setUploadedUrl(response.data.imageUrl);
// // //     } catch (error) {
// // //       console.error("Error uploading image:", error);
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!uploadedUrl) return alert("Please upload an image before submitting.");

// // //     try {
// // //       await API.post("/createblog", { ...formData, imageUrl: uploadedUrl }, {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       alert("Blog created successfully");
// // //       navigate("/");
// // //     } catch (error) {
// // //       alert("Error creating blog");
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto mt-8 p-4">
// // //       <h1 className="text-3xl font-bold">Create Blog</h1>
// // //       <form onSubmit={handleSubmit} className="mt-4">
// // //         <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="block border p-2 w-full mt-2" />
// // //         <textarea name="content" placeholder="Content" onChange={handleChange} required className="block border p-2 w-full mt-2"></textarea>
// // //         {/* <input type="text" name="author" placeholder="Author Name" onChange={handleChange} required className="block border p-2 w-full mt-2" /> */}
// // //         <input type="file" accept="image/*" onChange={handleFileChange} className="block mt-2" />
// // //         {preview && <img src={preview} alt="preview" className="mt-2 w-48" />}
// // //         <button type="button" onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 mt-2">Upload Image</button>
// // //         {uploadedUrl && <p className="mt-2">Image Uploaded: <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Image</a></p>}
// // //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">Post Blog</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import API from "../axiosConfig";

// // export default function CreateBlog() {
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     if (!token) {
// //       navigate("/login");
// //     }
// //   }, [token, navigate]);

// //   const [formData, setFormData] = useState({
// //     title: "",
// //     content: "",
// //     author: "",
// //     imageUrl: "", // Added imageUrl in formData
// //   });
// //   const [image, setImage] = useState(null);
// //   const [preview, setPreview] = useState("");

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (event) => {
// //     const file = event.target.files[0];
// //     setImage(file);
// //     setPreview(URL.createObjectURL(file));
// //   };

// //   const handleUpload = async () => {
// //     if (!image) return alert("Please select an image.");

// //     const formData = new FormData();
// //     formData.append("image", image);

// //     try {
// //       const response = await axios.post("http://localhost:8083/upload", formData, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });
// //       setFormData((prev) => ({ ...prev, imageUrl: response.data.imageUrl })); // Set imageUrl in formData
// //     } catch (error) {
// //       console.error("Error uploading image:", error);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!formData.imageUrl) return alert("Please upload an image before submitting.");

// //     try {
// //       await API.post("/createblog", formData, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       alert("Blog created successfully");
// //       navigate("/");
// //     } catch (error) {
// //       alert("Error creating blog");
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto mt-8 p-4">
// //       <h1 className="text-3xl font-bold">Create Blog</h1>
// //       <form onSubmit={handleSubmit} className="mt-4">
// //         <input
// //           type="text"
// //           name="title"
// //           placeholder="Title"
// //           value={formData.title}
// //           onChange={handleChange}
// //           required
// //           className="block border p-2 w-full mt-2"
// //         />
// //         <textarea
// //           name="content"
// //           placeholder="Content"
// //           value={formData.content}
// //           onChange={handleChange}
// //           required
// //           className="block border p-2 w-full mt-2"
// //         ></textarea>

// //         <input type="file" accept="image/*" onChange={handleFileChange} className="block mt-2" />
// //         {preview && <img src={preview} alt="preview" className="mt-2 w-48" />}

// //         <button type="button" onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 mt-2">
// //           Upload Image
// //         </button>

// //         {formData.imageUrl && (
// //           <>
// //             <p className="mt-2">
// //               Image Uploaded: <a href={formData.imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Image</a>
// //             </p>
// //             <input
// //               type="text"
// //               name="imageUrl"
// //               value={formData.imageUrl}
// //               onChange={handleChange}
// //               className="block border p-2 w-full mt-2"
// //               placeholder="Image URL"
// //               readOnly
// //             />
// //           </>
// //         )}

// //         <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
// //           Post Blog
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import API from "../axiosConfig";

// export default function CreateBlog() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) {
//       navigate("/login");
//     }
//   }, [token, navigate]);

//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     imageUrl: "", // Updated to use imageUrl
//   });
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");
//   const [uploading, setUploading] = useState(false); // Track upload status
//   const [uploaded, setUploaded] = useState(false); // Track if the image is uploaded

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//     setUploaded(false); // Reset uploaded state when a new image is selected
//   };

//   const handleUpload = async () => {
//     if (!image) return alert("Please select an image.");
//     setUploading(true);

//     const uploadData = new FormData();
//     uploadData.append("image", image);

//     try {
//       const response = await axios.post("http://localhost:8083/upload", uploadData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setFormData((prev) => ({ ...prev, imageUrl: response.data.imageUrl }));
//       setUploaded(true);
//       alert("Image uploaded successfully.");
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("Image upload failed.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.imageUrl) return alert("Please upload an image before submitting.");

//     try {
//       await API.post("/createblog", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Blog created successfully!");
//       navigate("/");
//     } catch (error) {
//       alert("Error creating blog.");
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <h1 className="text-3xl font-bold">Create Blog</h1>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//           className="block border p-2 w-full mt-2"
//         />
//         <textarea
//           name="content"
//           placeholder="Content"
//           value={formData.content}
//           onChange={handleChange}
//           required
//           className="block border p-2 w-full mt-2"
//         ></textarea>

//         <input type="file" accept="image/*" onChange={handleFileChange} className="block mt-2" />
//         {preview && <img src={preview} alt="Preview" className="mt-2 w-48" />}

//         <button
//           type="button"
//           onClick={handleUpload}
//           className={`bg-green-500 text-white px-4 py-2 mt-2 ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
//           disabled={uploading}
//         >
//           {uploading ? "Uploading..." : "Upload Image"}
//         </button>

//         {formData.imageUrl && (
//           <>
//             <p className="mt-2">
//               Image Uploaded: <a href={formData.imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Image</a>
//             </p>
//             <input
//               type="text"
//               name="imageUrl"
//               value={formData.imageUrl}
//               className="block border p-2 w-full mt-2"
//               readOnly
//             />
//           </>
//         )}

//         <button
//           type="submit"
//           className={`bg-blue-500 text-white px-4 py-2 mt-4 ${!uploaded ? "opacity-50 cursor-not-allowed" : ""}`}
//           disabled={!uploaded}
//         >
//           Post Blog
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../axiosConfig";

export default function CreateBlog() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "", // Updated to use imageUrl
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false); // Track upload status
  const [uploaded, setUploaded] = useState(false); // Track if the image is uploaded

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setUploaded(false); // Reset uploaded state when a new image is selected
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image.");
    setUploading(true);

    const uploadData = new FormData();
    uploadData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8083/upload",
        uploadData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setFormData((prev) => ({ ...prev, imageUrl: response.data.imageUrl }));
      setUploaded(true);
      alert("Image uploaded successfully.");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.imageUrl)
      return alert("Please upload an image before submitting.");

    try {
      await API.post("/createblog", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Blog created successfully!");
      navigate("/");
    } catch (error) {
      alert("Error creating blog.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-nearTeal h-full">
      <div className=" container mx-auto mt-8 p-4 ">
        <h1 className="text-3xl font-bold ">Create Blog</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="block border p-2 w-full mt-2 text-2xl "
          />
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleChange}
            required
            className="block border p-2 w-full mt-2 text-2xl"
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block mt-2 text-2xl"
          />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-48" />}

          <button
            type="button"
            onClick={handleUpload}
            className={`bg-green-500 text-white px-4 py-2 mt-2 text-2xl  ${
              uploading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>

          {formData.imageUrl && (
            <>
              <p className="mt-2 ">
                Image Uploaded:{" "}
                <a
                  href={formData.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 "
                >
                  View Image
                </a>
              </p>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                className="block border p-2 w-full mt-2"
                readOnly
              />
            </>
          )}

          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 mt-4 text-2xl ${
              !uploaded ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!uploaded}
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}
