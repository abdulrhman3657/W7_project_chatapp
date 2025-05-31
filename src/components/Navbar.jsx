import { Link } from "react-router";

function Navbar() {

  const username = localStorage.getItem("username")

  return (
    <div className="">
      <div className="p-3 bg-gray-900 text-white flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between lg:justify-around items-center">
        <ul className="hidden lg:flex gap-5">
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"login"}>Login</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"signup"}>Sign up</Link>
          </li>
          {username && (
            <li className="hover:text-black hover:bg-white p-2 rounded-xl">
              {username}
            </li>
          )}
        </ul>

        {/* moblile list */}
        <ul className="lg:hidden text-center">
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"login"}>Login</Link>
          </li>
          <li className="hover:text-black hover:bg-white p-2 rounded-xl">
            <Link to={"signup"}>Sign up</Link>
          </li>
          {username && (
            <li className="hover:text-black hover:bg-white p-2 rounded-xl">
              {username}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
