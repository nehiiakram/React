import Profile from "./Profile";
import Settings from "./Settings";

function Dashboard() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Profile />
        <Settings />
      </div>
    </main>
  );
}

export default Dashboard;