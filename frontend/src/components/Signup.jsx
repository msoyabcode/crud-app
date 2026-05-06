import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  
  const [data, setData] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("email")){
      navigate("/")
    }
  })
  // data ko post krna or token lena backend se
  const handleSignup = async () =>{
    let result = await fetch("http://localhost:3200/signup",{
      method: "POST",
      body: JSON.stringify(data),
      headers:{
        'Content-type': 'application/json'
      }
    })
    result = await result.json()
    if(result.success){
      console.log(result)
      // document.cookie = "token"+result.token
      document.cookie = `token=${result.token}; path=/`
      localStorage.setItem("email", data.email)
      navigate("/")
    }else{
      alert("try again")
    }

  }
  return (
    <div className="max-w-md mx-auto mt-20  p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mt-6 text-center">Sign up</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="name">
          Name
        </label>
        <input 
        onChange={(event) => setData({...data, name:event.target.value})}
          className="w-full border border-gray-300 p-2 rounded "
          id="name"
          type="text"
          name="name"
          placeholder="Enter Your name"
        />
      </div>

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
      onClick={handleSignup}>
        Sign up
      </button>

      <div className="text-blue-600 text-lg text-center mt-3.5">
      <Link
       to="/login">Login</Link>
      </div>

    </div>
  );
};

export default Signup;
