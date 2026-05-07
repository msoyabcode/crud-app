// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const List = () => {
//   const [arrayItem, setArrayItem] = useState([]);
//   const navigate = useNavigate();
//   const [selectedItem, setSelectedItem] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     let list = await fetch("http://localhost:3200/get-tasks",{
//       credentials: 'include'
//     });
//     list = await list.json();
//     if (list.success) {
//       setArrayItem(list.result);
//     }else{
//       alert("try again")
//     }
//   };

//   // delete funtion
//   const deletefuntion = async (_id) => {
//     let item = await fetch("http://localhost:3200/delete/" + _id, {
//       credentials: 'include',
//       method: "DELETE",
//     });
//     item = await item.json();
//     if (item.success) {
//       getData();
//     }else{
//       alert("try again")
//     }
//   };

//   // header checkbox ka funciton
//   const SelectAll = (event) => {
//     console.log(event.target.checked);
//     if (event.target.checked) {
//       let item = arrayItem.map((item) => item._id);
//       setSelectedItem(item);
//     } else {
//       setSelectedItem([]);
//     }
//   };

//   // single checkbox select
//   const selectSingleItem = (id) => {
//     console.log(id);
//     if (selectedItem.includes(id)) {
//       let item = selectedItem.filter((item) => item != id);
//       setSelectedItem(item);
//     } else {
//       setSelectedItem([id, ...selectedItem]);
//     }
//   };


//   //  multiple delete funciton
//   const deleteItems = async () =>{
//     console.log(selectedItem)
//     let result = await fetch("http://localhost:3200/multiple-items",{
//       credentials: 'include',
//       method: "DELETE",
//       body: JSON.stringify(selectedItem),
//       headers:{
//         "Content-Type": 'application/json'
//       }
//     })
//    result = await result.json()
//     if(result.success){
//       getData()
//       setSelectedItem([])
//     }else{
//       alert("try again")
//     }
//   }


//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
//       {/* Title */}
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         List Items
//       </h1>

//       {/* Header Row */}
//       <button className="bg-amber-600 hover:bg-yellow-800 cursor-pointer px-4 py-1 text-white text-lg rounded-md shadow-2xl transition  mb-2"
//       onClick={deleteItems}>
//         Delete multiple items
//       </button>
//       <div className="flex justify-between bg-gray-100 p-4 rounded-md font-semibold text-gray-700 border">
//         <div className="w-1/6">
//           <input onChange={SelectAll} type="checkbox" />
//         </div>
//         <div className="w-1/6">S. No.</div>
//         <div className="w-2/6">Title</div>
//         <div className="w-3/6">Description</div>
//         <div className="w-1/6 text-center">Action</div>
//       </div>

//       {/* Data Rows */}
//       {arrayItem &&
//         arrayItem.map((item, index) => {
//           return (
//             <div
//               key={item._id}
//               className="flex justify-between p-4 border-b hover:bg-gray-50 transition"
//             >
//               <div className="w-1/6">
//                 <input
//                   onChange={() => selectSingleItem(item._id)}
//                   checked={selectedItem.includes(item._id)}
//                   type="checkbox"
//                 />
//               </div>
//               <div className="w-1/6 text-gray-700 flex items-center">
//                 {index + 1}
//               </div>
//               <div className="w-2/6 font-medium text-gray-900 flex items-center">
//                 {item.title}
//               </div>
//               <div className="w-3/6 text-gray-600 flex items-center">
//                 {item.description}
//               </div>
//               <div className="w-1/6 text-center flex items-center gap-1.5">
//                 <button
//                   className="bg-red-500 hover:bg-red-600 cursor-pointer px-4 py-1 text-white rounded-md shadow-sm transition "
//                   onClick={() => deletefuntion(item._id)}
//                 >
//                   Delete
//                 </button>
//                 <Link
//                   to={"/edit/" + item._id}
//                   className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-4 py-1 text-white rounded-md shadow-sm transition "
//                 >
//                   Edit
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default List;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {

  const [arrayItem, setArrayItem] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {

    let list = await fetch("http://localhost:3200/get-tasks", {
      credentials: "include",
    });

    list = await list.json();

    if (list.success) {
      setArrayItem(list.result);
    } else {
      alert("try again");
    }
  };

  // delete function

  const deletefuntion = async (_id) => {

    let item = await fetch("http://localhost:3200/delete/" + _id, {
      credentials: "include",
      method: "DELETE",
    });

    item = await item.json();

    if (item.success) {
      getData();
    } else {
      alert("try again");
    }
  };

  // header checkbox

  const SelectAll = (event) => {

    if (event.target.checked) {

      let item = arrayItem.map((item) => item._id);
      setSelectedItem(item);

    } else {
      setSelectedItem([]);
    }
  };

  // single checkbox

  const selectSingleItem = (id) => {

    if (selectedItem.includes(id)) {

      let item = selectedItem.filter((item) => item !== id);
      setSelectedItem(item);

    } else {

      setSelectedItem([id, ...selectedItem]);
    }
  };

  // multiple delete

  const deleteItems = async () => {

    let result = await fetch("http://localhost:3200/multiple-items", {
      credentials: "include",
      method: "DELETE",
      body: JSON.stringify(selectedItem),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();

    if (result.success) {
      getData();
      setSelectedItem([]);
    } else {
      alert("try again");
    }
  };

  return (

    <div className="max-w-7xl mx-auto mt-6 px-3 sm:px-5">

      <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6">

        {/* Title */}

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          List Items
        </h1>

        {/* Delete Button */}

        <button
          className="bg-amber-600 hover:bg-yellow-800 cursor-pointer px-4 py-2 text-white text-sm sm:text-base rounded-md shadow-lg transition mb-5"
          onClick={deleteItems}
        >
          Delete Multiple Items
        </button>

        {/* Desktop Table */}

        <div className="hidden md:block overflow-x-auto">

          {/* Header */}

          <div className="flex justify-between bg-gray-100 p-4 rounded-md font-semibold text-gray-700 border min-w-[900px]">

            <div className="w-1/6">
              <input onChange={SelectAll} type="checkbox" />
            </div>

            <div className="w-1/6">S. No.</div>

            <div className="w-2/6">Title</div>

            <div className="w-3/6">Description</div>

            <div className="w-1/6 text-center">Action</div>

          </div>

          {/* Rows */}

          {arrayItem.map((item, index) => (

            <div
              key={item._id}
              className="flex justify-between p-4 border-b hover:bg-gray-50 transition min-w-[900px]"
            >

              <div className="w-1/6 flex items-center">

                <input
                  onChange={() => selectSingleItem(item._id)}
                  checked={selectedItem.includes(item._id)}
                  type="checkbox"
                />

              </div>

              <div className="w-1/6 flex items-center">
                {index + 1}
              </div>

              <div className="w-2/6 flex items-center break-words">
                {item.title}
              </div>

              <div className="w-3/6 flex items-center break-words">
                {item.description}
              </div>

              <div className="w-1/6 flex items-center justify-center gap-2">

                <button
                  className="bg-red-500 hover:bg-red-600 px-4 py-1 text-white rounded-md"
                  onClick={() => deletefuntion(item._id)}
                >
                  Delete
                </button>

                <Link
                  to={"/edit/" + item._id}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-1 text-white rounded-md"
                >
                  Edit
                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* Mobile Cards */}

        <div className="block md:hidden space-y-4">

          {arrayItem.map((item, index) => (

            <div
              key={item._id}
              className="border rounded-xl p-4 shadow-md"
            >

              <div className="flex justify-between items-center mb-3">

                <input
                  onChange={() => selectSingleItem(item._id)}
                  checked={selectedItem.includes(item._id)}
                  type="checkbox"
                />

                <span className="font-semibold text-sm">
                  #{index + 1}
                </span>

              </div>

              <div className="mb-3">

                <h2 className="font-bold text-lg text-gray-800 break-words">
                  {item.title}
                </h2>

              </div>

              <div className="mb-4">

                <p className="text-gray-600 break-words">
                  {item.description}
                </p>

              </div>

              <div className="flex gap-2">

                <button
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 text-white rounded-md w-full"
                  onClick={() => deletefuntion(item._id)}
                >
                  Delete
                </button>

                <Link
                  to={"/edit/" + item._id}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-md w-full text-center"
                >
                  Edit
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default List;