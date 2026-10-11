
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import MediaTabs from "./components/MediaTabs";

import {
  fetchPictures,
  fetchVideos,
  fetchGIFs,
  saveMedia,
} from "./features/media/mediaSlice";

function App() {
  var dispatch = useDispatch();

  var [activeTab, setActiveTab] = useState("pictures");
  var [lastQuery, setLastQuery] = useState("cat");
  var [showCollections, setShowCollections] = useState(false);
  var [savedMedia, setSavedMedia] = useState([]);

  var media = useSelector((state) => state.media.media);
  var loading = useSelector((state) => state.media.loading);
  var error = useSelector((state) => state.media.error);

  // Search media
  function handleSearch(query) {
    if (!query.trim()) return;

    setLastQuery(query);
    setShowCollections(false);

    if (activeTab === "pictures") {
      dispatch(fetchPictures(query));
    } else if (activeTab === "videos") {
      dispatch(fetchVideos(query));
    } else if (activeTab === "gif") {
      dispatch(fetchGIFs(query));
    }
  }

  // Change tabs
  function handleTabChange(tab) {
    setActiveTab(tab);
    setShowCollections(false);

    if (tab === "pictures") {
      dispatch(fetchPictures(lastQuery));
    } else if (tab === "videos") {
      dispatch(fetchVideos(lastQuery));
    } else if (tab === "gif") {
      dispatch(fetchGIFs(lastQuery));
    }
  }

  // Save media
  function handleSave(item) {
    var itemToSave = {
      ...item,
      mediaType: activeTab,
    };

    var savedItems =
      JSON.parse(localStorage.getItem("savedMedia")) || [];

    var alreadySaved = savedItems.some(
      (savedItem) =>
        savedItem.id === itemToSave.id &&
        savedItem.mediaType === itemToSave.mediaType
    );

    if (!alreadySaved) {
      dispatch(saveMedia(itemToSave));

      savedItems.push(itemToSave);

      localStorage.setItem(
        "savedMedia",
        JSON.stringify(savedItems)
      );
    }

    setSavedMedia(savedItems);
  }

  // Open Collections
  function handleCollections() {
    var savedItems =
      JSON.parse(localStorage.getItem("savedMedia")) || [];

    setSavedMedia(savedItems);
    setShowCollections(true);
  }

  // Remove media from Collections
  function handleRemove(id, mediaType) {
    var savedItems =
      JSON.parse(localStorage.getItem("savedMedia")) || [];

    var updatedItems = savedItems.filter(
      (item) =>
        !(
          item.id === id &&
          item.mediaType === mediaType
        )
    );

    localStorage.setItem(
      "savedMedia",
      JSON.stringify(updatedItems)
    );

    setSavedMedia(updatedItems);
  }

  // Explore button
  function handleExplore() {
    setShowCollections(false);

    if (activeTab === "pictures") {
      dispatch(fetchPictures(lastQuery));
    } else if (activeTab === "videos") {
      dispatch(fetchVideos(lastQuery));
    } else if (activeTab === "gif") {
      dispatch(fetchGIFs(lastQuery));
    }
  }

  // Load default pictures
  useEffect(() => {
    dispatch(fetchPictures("cat"));
  }, [dispatch]);

  // Media image or video

  function renderMedia(item, isCollection) {
    if (
      item.mediaType === "videos" ||
      (activeTab === "videos" && !isCollection)
    ) {
      if (item.videos && item.videos.medium) {
        return (
          <video
            controls
            autoPlay
            muted
            playsInline
            poster={item.videos.medium.thumbnail}
            className="w-full h-56 object-cover bg-black"
          >
            <source
              src={item.videos.medium.url}
              type="video/mp4"
            />
          </video>
        );
      }
    }

    if (item.mediaType === "gif" ||
      (activeTab === "gif" && !isCollection)) {
      var gifUrl =
        item.images &&
        item.images.fixed_height &&
        item.images.fixed_height.url;

      return (
        <img
          src={gifUrl}
          alt={item.title || "GIF"}
          className="w-full h-56 object-cover"
        />
      );
    }

    return (
      <img
        src={item.webformatURL}
        alt={item.tags || "Picture"}
        className="w-full h-56 object-cover"
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar
        onSearch={handleSearch}
        onCollections={handleCollections}
        onExplore={handleExplore}
      />

      {!showCollections && (
        <MediaTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      )}

      <main className="min-h-screen bg-slate-950 px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {/* Collections */}
          {showCollections ? (
            <section>
              <div className="mb-8">
                <p className="text-cyan-400 text-sm uppercase tracking-widest mb-2">
                  Your personal library
                </p>

                <h2 className="text-3xl font-bold">
                  My Collections
                </h2>

                <p className="text-slate-400 mt-2">
                  Your saved pictures, videos and GIFs.
                </p>
              </div>

              {savedMedia.length === 0 ? (
                <div className="text-center py-20 rounded-2xl border border-slate-800 bg-slate-900">
                  <p className="text-5xl mb-4">📂</p>

                  <h3 className="text-xl font-semibold">
                    No saved media yet
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Explore and save something you like!
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {savedMedia.map((item) => (
                    <div
                      key={`${item.mediaType}-${item.id}`}
                      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
                    >
                      {renderMedia(item, true)}

                      <div className="p-4">
                        <p className="text-sm text-slate-400 mb-3">
                          {item.mediaType === "videos"
                            ? "Video"
                            : item.mediaType === "gif"
                              ? "GIF"
                              : "Picture"}
                        </p>

                        <button
                          onClick={() =>
                            handleRemove(item.id, item.mediaType)
                          }
                          className="w-full rounded-xl bg-red-500/10 border border-red-500/30 px-4 py-2.5 text-red-400 hover:bg-red-500 hover:text-white transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ) : (
            /* Explore */
            <section>
              <div className="mb-8">
                <p className="text-cyan-400 text-sm uppercase tracking-widest mb-2">
                  Discover something amazing
                </p>

                <h2 className="text-3xl font-bold">
                  Explore{" "}
                  {activeTab === "videos"
                    ? "Videos"
                    : activeTab === "gif"
                      ? "GIFs"
                      : "Pictures"}
                </h2>

                <p className="text-slate-400 mt-2">
                  Search for anything you love.
                </p>
              </div>

              {loading && (
                <p className="text-center py-12 text-cyan-400">
                  Loading {activeTab}...
                </p>
              )}

              {error && (
                <p className="text-center py-8 text-red-400">
                  Something went wrong: {error}
                </p>
              )}

              {!loading && !error && media.length === 0 && (
                <p className="text-center py-12 text-slate-400">
                  No results found. Try another search.
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {!loading &&
                  media.map((item) => (
                    <div
                      key={item.id}
                      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 hover:border-cyan-500/60 transition duration-300"
                    >
                      {renderMedia(item, false)}

                      <div className="p-4">
                        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                          {activeTab === "videos"
                            ? "Video"
                            : activeTab === "gif"
                              ? "GIF"
                              : "Picture"}
                        </p>

                        <p className="text-sm text-slate-300 truncate mb-4">
                          {item.tags ||
                            item.title ||
                            "Untitled media"}
                        </p>

                        <button
                          onClick={() => handleSave(item)}
                          className="w-full rounded-xl bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950 hover:bg-cyan-400 transition"
                        >
                          + Save to Collection
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

