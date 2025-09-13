import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { postsAPI } from "../../api/postsAPI";

const initialState = {
  posts: {
    list: [],
    loading: false
  },
  postForView: {
    post: null,
    loading: false,
  },
  // freshPosts: {
  //   posts: null,
  //   loading: false,
  // },
}

//селектор для выборки свежих постов из общего массива полученных постов
const selectAllPosts = (state) => state.posts?.posts?.list ?? [];
export const selectFreshPosts = createSelector(
  [selectAllPosts],
  (posts) => posts.filter(post => post.id > 97)
);

export const getPostById = createAsyncThunk(
  'posts/fetchById',
  async (postId) => {
    return await postsAPI.fetchById(postId)
  }
)
export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return await postsAPI.fetchPosts()
  }
)
// export const getFreshPosts = createAsyncThunk(
//   'posts/fetchFreshPosts',
//   async (limit) => {
//     return await postsAPI.fetchFreshPosts(limit)
//   }
// )

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    editPost: (state, action) => {
      state.posts.list = state.posts.list.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload
        }
        return post
      })
    },
    addPost: (state, action) => {
      const newPost = {...action.payload}
      newPost.id = new Date().getTime()
      state.posts.list = state.posts.list ? [newPost, ...state.posts.list] : [newPost]
    },
    showPost: (state, action) => {
      state.postForView = {
        post: action.payload,
        loading: false
      }
    },
    deletePost: (state, action) => { 
      const idToDelete = action.payload.id;
      state.posts.list = state.posts.list.filter((post) => post.id !== idToDelete);
      if (state.postForView.post?.id === idToDelete) {
        state.postForView = { 
          post: null,
          loading: false
        }
      }
      // state.postForView = {
      //   post: null,
      //   loading: false
      // }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPostById.pending, (state, action) => {
      state.postForView = {
        post: null,
        loading: true
      }
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.postForView = {
        post: action.payload,
        loading: false
      }
    });
    builder.addCase(getPosts.pending, (state, action) => {
      state.posts = {
        list: null,
        loading: true
      }
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = {
        list: action.payload,
        loading: false
      }
    });
    // builder.addCase(getFreshPosts.pending, (state, action) => {
    //   state.freshPosts = {
    //     posts: null,
    //     loading: true
    //   }
    // });
    // builder.addCase(getFreshPosts.fulfilled, (state, action) => {
    //   state.freshPosts = {
    //     posts: action.payload,
    //     loading: false
    //   }
    // });
  },
})

export const { editPost, addPost, showPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer