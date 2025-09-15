import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { postsAPI } from "../../api/postsAPI";

const initialState = {
  posts: {
    list: [],
    // loading: false
  },
  postForView: {
    post: null,
    loading: false,
  },
  loading: false,
  currentPage: 1,  //хранение номера страницы
  sortOrder: 'id_desc',  //по умолчанию сортировка по id по убыанию
  filterText: '', // фильтр по началу названия

  // freshPosts: {
  //   posts: null,
  //   loading: false,
  // },
}

//селектор для выборки свежих постов из общего массива полученных постов
const selectAllPosts = (state) => state.posts?.posts?.list ?? [];
export const selectFreshPosts = createSelector(
  [selectAllPosts],
  (posts) => posts.filter(post => post.id >= 97)
);

//селектор для фильтрации постов по началу названия
export const selectFilteredPosts = createSelector(
  [selectAllPosts, (state) => state.posts.sortOrder, (state) => state.posts.filterText],
  (posts, sortOrder, filterText) => {
    //фильтр
    const filtered = posts.filter(post => 
      post.title.toLowerCase().startsWith(filterText.toLowerCase())
    );
    //сортировка
    const sorted = [...filtered];
    switch (sortOrder) {
      case 'id_asc': 
        sorted.sort((a, b) => a.id - b.id);
        break;
      case 'id_desc': 
        sorted.sort((a,b) => b.id - a.id);
        break;
      case 'name_asc': 
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc': 
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
    }
    return sorted
  }
);

//селектор для получения числа страниц
export const selectTotalPagesFiltered = createSelector(
  [selectFilteredPosts],
  (filteredPosts) => {
    const postsPerPage = 10;  // или передавайте из пропсов
    return Math.ceil(filteredPosts.length / postsPerPage);
  }
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
    //для сортировки
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
      //при смене сортировки сбрасываем страницу
      state.currentPage = 1;
    },
    //для фильтрации
    setFilterText: (state, action) => {
      state.filterText = action.payload;
      state.currentPage = 1;
    },
    //для изменения номера страницы
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
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
      state.loading = true
      // state.posts = {
      //   // list: [],
      //   loading: true
      // }
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = {
        list: action.payload,
        // loading: false
      }
      state.loading = false
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

export const { editPost, addPost, showPost, deletePost, setPage, setSortOrder, setFilterText } = postsSlice.actions;

export default postsSlice.reducer