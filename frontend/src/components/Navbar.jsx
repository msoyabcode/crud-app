import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between p-6  bg-gray-600 text-white">
      <div>
        <h1 className="text-3xl">To Do App</h1>
      </div>

      <ul className="flex gap-12 text-2xl">
        <li>
          <Link className="hover:text-gray-300" to="/">List</Link>
        </li>
        <li>
          <Link className="hover:text-gray-300" to="/add">Add task</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
