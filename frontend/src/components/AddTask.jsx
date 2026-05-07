// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddTask = () => {

//   const [taskData, setTaskData] = useState()
//   const navigate = useNavigate()
  
//   const handleAdd = async () =>{

//     if(!taskData?.title || !taskData?.description){
//       alert("please fill all fields")
//       return
//     }
    
//     console.log(taskData)
//     let result = await fetch("http://localhost:3200/add-task",{
//       method: 'Post',
//       body: JSON.stringify(taskData),
//       credentials: 'include',
//       headers:{
//         'Content-Type': 'Application/Json'
//       }
//     })
//     result = await result.json()
//     if(result.success){
//       console.log("new task added")
//           navigate("/")
//     }else{
//       alert("try again")
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto mt-20  p-6 shadow-lg rounded-lg">
//       <h1 className="text-2xl font-bold mt-6 text-center">Add New Task</h1>
      
//         <div className="mb-4">
//           <label className="block mb-1 font-medium" htmlFor="title">
//             Title:
//           </label>
//           <input
//           onChange={(event)=>setTaskData({...taskData, title: event.target.value})}
//             className="w-full border border-gray-300 p-2 rounded "
//             id="title"
//             type="text"
//             name="title"
//             placeholder="Enter task here"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium mb-1" htmlFor="description">
//             Description:    
//           </label>
//           <textarea
//           onChange={(event)=> setTaskData({...taskData, description: event.target.value})}
//             className="w-full border border-gray-300 p-2 rounded"
//             rows={3}
//             id="description"
//             name="description"
//             placeholder="Enter task description"
//           ></textarea>
//         </div>

//         <button className="bg-blue-500 w-full p-2 rounded-2xl cursor-pointer text-white hover:bg-blue-600 transition text-lg"
//         onClick={handleAdd}>
//           Add Task
//         </button>
    
//     </div>
//   );
// };

// export default AddTask;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

  const [taskData, setTaskData] = useState({
    title: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleAdd = async () => {

    if (!taskData?.title || !taskData?.description) {
      alert("please fill all fields");
      return;
    }

    let result = await fetch("http://localhost:3200/add-task", {
      method: "POST",
      body: JSON.stringify(taskData),
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });

    result = await result.json();

    if (result.success) {
      navigate("/");
    } else {
      alert("try again");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6">

      <div className="w-full max-w-md p-5 sm:p-6 md:p-8 shadow-lg rounded-lg bg-white">

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Add New Task
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-sm sm:text-base">
            Title:
          </label>

          <input
            onChange={(event) =>
              setTaskData({
                ...taskData,
                title: event.target.value
              })
            }
            className="w-full border border-gray-300 p-3 rounded outline-none"
            type="text"
            placeholder="Enter task here"
          />
        </div>

        <div className="mb-4">

          <label className="block mb-2 font-medium text-sm sm:text-base">
            Description:
          </label>

          <textarea
            onChange={(event) =>
              setTaskData({
                ...taskData,
                description: event.target.value
              })
            }
            className="w-full border border-gray-300 p-3 rounded outline-none resize-none"
            rows={4}
            placeholder="Enter task description"
          ></textarea>

        </div>

        <button
          className="bg-blue-500 w-full p-3 rounded-xl cursor-pointer text-white hover:bg-blue-600 transition text-base sm:text-lg"
          onClick={handleAdd}
        >
          Add Task
        </button>

      </div>

    </div>
  );
};

export default AddTask;