import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const [item, setItem] = useState()
    console.log(item)
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() =>{
        fetchItem()
    }, [])

    const fetchItem = async () =>{
        let result =  await fetch("http://localhost:3200/get-item/"+id)
        result = await result.json()
        if(result.success){
            setItem(result.result)
        }
    } 

    const Update = async () =>{
      let response = await fetch("http://localhost:3200/edit-item/"+id,{
        method: "PUT",
        body: JSON.stringify(item),
        headers:{
          'Content-type': 'application/json'
        }
      })
    
     response = await response.json()
    if(response.success){
      navigate("/")
    }
  }
console.log(item)
  return (
    <div className="max-w-md mx-auto mt-20  p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mt-6 text-center">Add New Task</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="title">
          Title:
        </label>
        <input
          className="w-full border border-gray-300 p-2 rounded "
          id="title"
          type="text"
          name="title"
        value={item?.title}
        onChange={(event)=>setItem({...item, title: event.target.value})}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1" htmlFor="description">
          Description:
        </label>
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          rows={3}
          id="description"
          name="description"
          value={item?.description}
          onChange={(event)=>setItem({...item, description: event.target.value})}
        ></textarea>
      </div>

      <button className="bg-blue-500 w-full p-2 rounded-2xl cursor-pointer text-white hover:bg-blue-600 transition text-lg"
      onClick={Update}>
        Update Task
      </button>
    </div>
  );
};

export default Edit;
