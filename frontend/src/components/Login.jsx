// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Login = () => {
  
//   const [data, setData] = useState()
//   const navigate = useNavigate()
  
//   useEffect(()=>{
//     if(localStorage.getItem("email")){
//       navigate("/")
//     }
//   })

//   const handleLogin = async () =>{
//     let result = await fetch("http://localhost:3200/login",{
//       method: "POST",
//       body: JSON.stringify(data),
//       headers:{
//         'Content-type': 'application/json'
//       },
      
//     })
//     result = await result.json()
//     if(result.success){
//       // document.cookie = "token"+result.token
//       document.cookie = `token=${result.token}; path=/`
//       localStorage.setItem('email', data.email)
//       window.dispatchEvent(new Event('localStorage-change'))
//       navigate("/")
//     }else{
//       alert("try again")
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-20  p-6 shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mt-6 text-center">Login</h1>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium" htmlFor="email">
//           Email:
//         </label>
//         <input 
//         onChange={(event) => setData({...data, email:event.target.value})}
//           className="w-full border border-gray-300 p-2 rounded "
//           type="text"
//           name="email"
//           id="email"
//           placeholder="Enter Your email"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1 font-medium" htmlFor="password">
//           Password
//         </label>
//         <input 
//         onChange={(event) => setData({...data, password:event.target.value})}
//           className="w-full border border-gray-300 p-2 rounded "
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter Your password"
//         />
//       </div>

//       <button className="bg-blue-500 w-full p-2 rounded-2xl cursor-pointer text-white hover:bg-blue-600 transition text-lg"
//       onClick={handleLogin}>
//         Login
//       </button>

//       <div className="text-blue-600 text-lg text-center mt-3.5">
//       <Link to="/signup"> Sign up</Link>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {

    if (localStorage.getItem("email")) {
      navigate("/");
    }

  }, []);

  const handleLogin = async () => {

    let result = await fetch("http://localhost:3200/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    });

    result = await result.json();

    if (result.success) {

      document.cookie = `token=${result.token}; path=/`;

      localStorage.setItem("email", data.email);

      window.dispatchEvent(new Event("localStorage-change"));

      navigate("/");

    } else {
      alert("try again");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center px-4 py-6">

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-5 sm:p-6 md:p-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Login
        </h1>

        {/* Email */}

        <div className="mb-4">

          <label
            className="block mb-2 font-medium text-sm sm:text-base"
            htmlFor="email"
          >
            Email:
          </label>

          <input
            onChange={(event) =>
              setData({
                ...data,
                email: event.target.value
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none"
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />

        </div>

        {/* Password */}

        <div className="mb-5">

          <label
            className="block mb-2 font-medium text-sm sm:text-base"
            htmlFor="password"
          >
            Password
          </label>

          <input
            onChange={(event) =>
              setData({
                ...data,
                password: event.target.value
              })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />

        </div>

        {/* Button */}

        <button
          className="bg-blue-500 w-full p-3 rounded-xl cursor-pointer text-white hover:bg-blue-600 transition text-base sm:text-lg"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Signup Link */}

        <div className="text-blue-600 text-sm sm:text-base text-center mt-4">

          <Link to="/signup">
            Don't have an account? Sign up
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;