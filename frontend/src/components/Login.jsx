import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  
  const [data, setData] = useState()
  

  return (
    <div className="max-w-md mx-auto mt-20  p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mt-6 text-center">Login</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="email">
          Email:
        </label>
        <input 
        onChange={(event) => setData({...data, email:event.target.value})}
          className="w-full border border-gray-300 p-2 rounded "
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your email"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="password">
          Password
        </label>
        <input 
        onChange={(event) => setData({...data, password:event.target.value})}
          className="w-full border border-gray-300 p-2 rounded "
          type="text"
          name="password"
          id="password"
          placeholder="Enter Your password"
        />
      </div>

      <button className="bg-blue-500 w-full p-2 rounded-2xl cursor-pointer text-white hover:bg-blue-600 transition text-lg"
      onClick={()=>console.log(data)}>
        Login
      </button>

      <div className="text-blue-600 text-lg text-center mt-3.5">
      <Link to="/signup"> Sign up</Link>
      </div>
    </div>
  );
};

export default Login;



// 🔐 Authentication ka actual flow

// Main aapko clear roadmap deta hoon:

// 1. User Schema banaya ✔️ (ye wala step)
// 2. Signup API
// user register karega
// password hash hoga
// 3. Login API
// email check
// password compare
// 4. Token (JWT)
// user ko token diya jaata hai
// 5. Protected Routes
// sirf logged-in user access kare