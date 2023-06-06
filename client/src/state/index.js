import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  users: null,
  token: null,
  posts: [],
  comments: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setUsers: (state, action) => {
      if (state.user) {
        state.users = action.payload.users;
      } else {
        console.error("users non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    commentPost: (state, action) => {
      const updatedComments = state.comments.map((comment) => {
        if (comment._id === action.payload.comment._id) {
          return action.payload.comment;
        }
        return comment;
      });
      state.comments = updatedComments;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setUsers,
  setPosts,
  setPost,
  commentPost,
} = authSlice.actions;
export default authSlice.reducer;
