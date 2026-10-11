var API_KEY = "57945061-1220d0ea82b38a368eecb0a24";

export async function searchPictures(query) {
  var response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=20`
  );

  if (!response.ok) {
    throw new Error("Pictures API failed");
  }

  var data = await response.json();

  return data.hits;
}

export async function searchVideos(query) {
  var response = await fetch(
    `https://pixabay.com/api/videos/?key=${API_KEY}&q=${encodeURIComponent(query)}&per_page=20`
  );

  if (!response.ok) {
    throw new Error("Videos API failed");
  }

  var data = await response.json();

  return data.hits;
}

// Search GIFs using GIPHY API
export async function searchGIFs(query) {
  var response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=vKMVPgUNeNPWP5dmcaUmMW3jr2EDHLjF&q=${encodeURIComponent(query)}&limit=20&rating=g`
  );

  if (!response.ok) {
    throw new Error("GIF API failed");
  }

  var data = await response.json();
  return data.data;
}