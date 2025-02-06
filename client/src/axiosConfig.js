import axios from 'axios';

const API = axios.create({
    baseURL: `{process.env.BACKEND_URL}/api/v1/auth`,
});
console.log("API", API);

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // module.exports = {
  //   resolve: {
  //     fallback: {
  //       buffer: require.resolve('buffer/')
  //     }
  //   }
  // };

  export default API;