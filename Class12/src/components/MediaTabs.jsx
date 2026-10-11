function MediaTabs({ activeTab, onTabChange }) {
  var tabs = [
    { id: "pictures", label: "🖼️ Pictures" },
    { id: "videos", label: "🎬 Videos" },
    { id: "gif", label: "✨ GIFs" },
  ];

  return (
    <div className="bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-center gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-7 py-3 rounded-xl font-semibold transition duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaTabs;