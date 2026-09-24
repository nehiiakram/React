import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const user = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={`border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-indigo-950 border-indigo-800 text-white"
          : "bg-indigo-600 border-indigo-500 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Student Dashboard
          </h1>

          <p className="text-sm text-indigo-200 mt-1">
            Student Management App
          </p>
        </div>

        <div className="text-right">
          <p className="font-semibold">
            Welcome, {user.name}
          </p>

          <p className="text-sm text-indigo-200 mt-1">
            Role: {user.role}
          </p>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;