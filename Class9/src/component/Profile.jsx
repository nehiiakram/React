import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Profile() {
  const user = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-2xl border p-6 shadow-md transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-800 border-indigo-700 text-white"
          : "bg-indigo-50 border-indigo-200 text-slate-900"
      }`}
    >
      {/* Profile Heading */}
      <div className="flex items-center gap-4 mb-6">
        
        <div className="w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
          NK
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Student Profile
          </h2>

          <p
            className={`text-sm mt-1 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
            }`}
          >
            Personal Information
          </p>
        </div>

      </div>

      {/* Student Information */}
      <div className="space-y-4">

        {/* Name */}
        <div
          className={`p-4 rounded-xl border ${
            theme === "dark"
              ? "bg-slate-700 border-slate-600"
              : "bg-white border-indigo-100"
          }`}
        >
          <p className="text-sm font-medium text-indigo-500">
            Name
          </p>

          <p className="font-semibold mt-1">
            {user.name}
          </p>
        </div>

        {/* Email */}
        <div
          className={`p-4 rounded-xl border ${
            theme === "dark"
              ? "bg-slate-700 border-slate-600"
              : "bg-white border-indigo-100"
          }`}
        >
          <p className="text-sm font-medium text-indigo-500">
            Email
          </p>

          <p className="font-semibold mt-1">
            {user.email}
          </p>
        </div>

        {/* Role */}
        <div
          className={`p-4 rounded-xl border ${
            theme === "dark"
              ? "bg-slate-700 border-slate-600"
              : "bg-white border-indigo-100"
          }`}
        >
          <p className="text-sm font-medium text-indigo-500">
            Role
          </p>

          <p className="font-semibold mt-1">
            {user.role}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Profile;