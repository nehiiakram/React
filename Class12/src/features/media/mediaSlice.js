import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  searchPictures,
  searchVideos,
  searchGIFs,
} from "../../services/api";

// Pictures API
export const fetchPictures = createAsyncThunk(
  "media/fetchPictures",
  async (query) => {
    var data = await searchPictures(query);
    return data;
  }
);

// Videos API
export const fetchVideos = createAsyncThunk(
  "media/fetchVideos",
  async (query) => {
    var data = await searchVideos(query);
    return data;
  }
);

// GIFs API
export const fetchGIFs = createAsyncThunk(
  "media/fetchGIFs",
  async (query) => {
    var data = await searchGIFs(query);
    return data;
  }
);

// Initial State
var initialState = {
  media: [],
  loading: false,
  error: null,
};

// Media Slice
var mediaSlice = createSlice({
  name: "media",
  initialState,

  reducers: {
    // Save media to localStorage
    saveMedia: (state, action) => {
      var savedItems =
        JSON.parse(localStorage.getItem("savedMedia")) || [];

      var alreadySaved = savedItems.some(
        (item) =>
          item.id === action.payload.id &&
          item.mediaType === action.payload.mediaType
      );

      if (!alreadySaved) {
        savedItems.push(action.payload);

        localStorage.setItem(
          "savedMedia",
          JSON.stringify(savedItems)
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder
      // Pictures
      .addCase(fetchPictures.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPictures.fulfilled, (state, action) => {
        state.loading = false;
        state.media = action.payload;
      })
      .addCase(fetchPictures.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Videos
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.media = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // GIFs
      .addCase(fetchGIFs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGIFs.fulfilled, (state, action) => {
        state.loading = false;
        state.media = action.payload;
      })
      .addCase(fetchGIFs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions
export const { saveMedia } = mediaSlice.actions;

// Export reducer
export default mediaSlice.reducer;

