function Navbar({ onSearch, onCollections, onExplore }) {
  var searchValue = "";

  function handleSearch() {
    if (searchValue.trim() === "") {
      return;
    }

    onSearch(searchValue);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-xl">✦</span>
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Media<span className="text-cyan-400">Hub</span>
              </h1>

              <p className="text-[10px] uppercase tracking-[3px] text-slate-500">
                Explore Everything
              </p>
            </div>

          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">

            <div className="flex w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden">

              <input
                type="text"
                placeholder="Search cats, cars, flowers, anime..."
                onChange={(e) => {
                  searchValue = e.target.value;
                }}
                className="flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                onClick={handleSearch}
                className="px-6 bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
              >
                Search
              </button>

            </div>

          </div>

          {/* Navbar Buttons */}
          <div className="flex items-center gap-3">

            <button
              onClick={onCollections}
              className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Collections
            </button>

            <button
              onClick={onExplore}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
            >
              Explore
            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;