import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = () => {

  const [taskData, setTaskData] = useState()
  const navigate = useNavigate()
  
  const handleAdd = async () =>{
    console.log(taskData)
    let result = await fetch("http://localhost:3200/add-task",{
      method: 'Post',
      body: JSON.stringify(taskData),
      headers:{
        'Content-Type': 'Application/Json'
      }
    })
    result = await result.json()
    if(result){
      console.log("new task added")
    }

    navigate("/")
  }

  return (
    <div className="max-w-md mx-auto mt-20  p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mt-6 text-center">Add New Task</h1>
      
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="title">
            Title:
          </label>
          <input
          onChange={(event)=>setTaskData({...taskData, title: event.target.value})}
            className="w-full border border-gray-300 p-2 rounded "
            id="title"
            type="text"
            name="title"
            placeholder="Enter task here"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="description">
            Description:
          </label>
          <textarea
          onChange={(event)=> setTaskData({...taskData, description: event.target.value})}
            className="w-full border border-gray-300 p-2 rounded"
            rows={3}
            id="description"
            name="description"
            placeholder="Enter task description"
          ></textarea>
        </div>

        <button className="bg-blue-500 w-full p-2 rounded-2xl cursor-pointer text-white hover:bg-blue-600 transition text-lg"
        onClick={handleAdd}>
          Add Task
        </button>
    
    </div>
  );
};

export default AddTask;
