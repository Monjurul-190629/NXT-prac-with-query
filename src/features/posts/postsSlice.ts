import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postApi"

interface Initial{
    posts : [],
    isLoading: boolean,
    isError : boolean,
    error :  string | undefined
}


const initialState : Initial = {
    posts : [],
    isLoading : false,
    isError : false,
    error : ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPosts();
    return posts;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = action.payload
      })
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.error = action.error?.message
      })
    },
  })
  

export default postsSlice.reducer;