// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const List = () => {
//   const [arrayItem, setArrayItem] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     let list = await fetch("http://localhost:3200/get-tasks");
//     list = await list.json();
//     if (list.success) {
//       setArrayItem(list.result);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-13 p-6">
//       <h1 className="text-3xl font-bold text-center mb-13">List Item</h1>
//       <ul className="flex justify-between font-semibold bg-gray-200 rounded p-3">
//         <li>S. NO.</li>
//         <li>Title</li>
//         <li>Description</li>
//       </ul>

//       {arrayItem &&
//         arrayItem.map((item, index) => {
//             return(
//           <ul key={item._id} className=" border-gray-00 hover:bg-gray-2 flex justify-between border-b p-3">
//             <li>{index + 1}</li>
//             <li>{item.title}</li>
//             <li>{item.description}</li>
//           </ul>
//             )
//         })}
//     </div>
//   );
// };

// export default List;

import React, { useEffect, useState } from "react";

const List = () => {
  const [arrayItem, setArrayItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let list = await fetch("http://localhost:3200/get-tasks");
    list = await list.json();
    if (list.success) {
      setArrayItem(list.result);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        List Items
      </h1>

      {/* Header Row */}
      <div className="flex justify-between bg-gray-100 p-4 rounded-md font-semibold text-gray-700 border">
        <div className="w-1/6">S. No.</div>
        <div className="w-2/6">Title</div>
        <div className="w-3/6">Description</div>
      </div>

      {/* Data Rows */}
      {arrayItem &&
        arrayItem.map((item, index) => {
          return (
            <div
              key={item._id}
              className="flex justify-between p-4 border-b hover:bg-gray-50 transition"
            >
              <div className="w-1/6 text-gray-700">{index + 1}</div>
              <div className="w-2/6 font-medium text-gray-900">
                {item.title}
              </div>
              <div className="w-3/6 text-gray-600">
                {item.description}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default List;