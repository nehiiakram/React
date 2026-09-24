import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <Navbar />

      <Dashboard />
    </div>
  );
}

export default App;