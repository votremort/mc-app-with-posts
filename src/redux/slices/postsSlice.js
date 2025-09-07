import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 5,
      title: 'Post 5',
      image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, quo doloribus praesentium modi provident minima rem adipisci molestiae ipsa quia cum facere asperiores tempora quod incidunt consequuntur vero sed.',
    },
    {
      id: 4,
      title: 'Post 4',
      image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, quo doloribus praesentium modi provident minima rem adipisci molestiae ipsa quia cum facere asperiores tempora quod incidunt consequuntur vero sed.',
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, quo doloribus praesentium modi provident minima rem adipisci molestiae ipsa quia cum facere asperiores tempora quod incidunt consequuntur vero sed.',
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, quo doloribus praesentium modi provident minima rem adipisci molestiae ipsa quia cum facere asperiores tempora quod incidunt consequuntur vero sed.',
    },
    {
      id: 1,
      title: 'Post 1',
      image: 'https://img2.safereactor.cc/pics/post/full/%D0%BA%D0%BE%D1%82%D1%8D-%D0%A1%D1%84%D0%B8%D0%BD%D0%BA%D1%81-(%D0%BF%D0%BE%D1%80%D0%BE%D0%B4%D0%B0)-%D0%BC%D0%B0%D0%BD%D1%87%D0%BA%D0%B8%D0%BD-7357586.jpeg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus, quo doloribus praesentium modi provident minima rem adipisci molestiae ipsa quia cum facere asperiores tempora quod incidunt consequuntur vero sed.',
    },
  ],
  postForView: null,
  freshPosts: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
    editPost: (state, action) => {

    },
    getPost: (state, action) => {
      state.postForView = state.list.find((item) => item.id === action.payload)
    },
    getFreshPosts: (state) => {
      state.freshPosts = state.list.slice(0, 3)
    },
    addPost: (state, action) => {

    },

  }
})

export const { setPosts, editPost, getPost, getFreshPosts, addPost } = postsSlice.actions;

export default postsSlice.reducer