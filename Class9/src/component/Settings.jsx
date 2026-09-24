import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center">

      <h2
        className={`text-2xl font-bold mb-2 ${
          theme === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        Settings
      </h2>

      <p
        className={`text-sm mb-5 ${
          theme === "dark" ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Current Theme:{" "}
        <span className="font-bold capitalize text-indigo-500">
          {theme}
        </span>
      </p>

      <button
        onClick={toggleTheme}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
      >
        Toggle Theme
      </button>

    </div>
  );
}

export default Settings;