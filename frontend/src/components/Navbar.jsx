import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [login, setLogin] = useState(localStorage.getItem("email"));
  const navigate = useNavigate()


  const logout = () => {
    console.log("test");
    localStorage.removeItem("email");
    setLogin(null)
    setTimeout(()=>{
      navigate('/login')
    },0)
  };

  useEffect(() => {
    const handleStorage = () => {
      setLogin(localStorage.getItem("email"));
    };
    window.addEventListener("localStorage-change", handleStorage)
    return () => {
      window.removeEventListener("localStorage-change", handleStorage);
    };
  }, []);
  return (
    <nav className="flex justify-between p-6  bg-gray-600 text-white">
      <div>
        <h1 className="text-3xl">To Do App</h1>
      </div>

      <ul className="flex gap-12 text-2xl">
        {login ? (
          <>
            <li>
              <Link className="hover:text-gray-300" to="/">
                List
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" to="/add">
                Add task
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <h4>Login Your Account</h4>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
