import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// 第一种方式：
// export const fetchHomeMultidataAction = createAsyncThunk(
//   'fetch/homemultidata',
//   async (extraInfo, { dispatch, getState }) => {
//      // 1.发送网络请求, 获取数据
//     const res = await axios.get('http://123.207.32.32:8000/home/multidata')

//      // 2.取出数据, 并且在此处直接dispatch操作(可以不做)
//     console.log(res)
//     const banners = res.data.data.banner.list
//     console.log(banners)
//     dispatch(changeBanners(banners))

//     // 3.返回结果, 那么action状态会变成fulfilled状态
//     return res.data
//   }
// )

// 第二种方式：createAsyncThunk + extraReducers
export const fetchHomeMultidataAction = createAsyncThunk(
  'fetch/homemultidata',
  async (extraInfo, { dispatch, getState }) => {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    return res.data
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
  },
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    }
  },
  // 第二种方式：
  // extraReducers: {
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log('fetchHomeMultidataAction pending')
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, { payload }) {
  //     state.banners = payload.data.banner.list
  //   },
  //   [fetchHomeMultidataAction.rejected](state, action) {
  //     console.log('fetchHomeMultidataAction rejected')
  //   }
  // }
  // 第三种方式：
  extraReducers: (builder) => {
    builder.addCase(
      fetchHomeMultidataAction.pending, (state, action) => {
        console.log('fetchHomeMultidataAction pending')
      }
    ).addCase(
      fetchHomeMultidataAction.fulfilled, (state, action) => {
        console.log('action:', action)
        state.banners = action.payload.data.banner.list
      }
    )
  }
})

export const { changeBanners } = homeSlice.actions
export default homeSlice.reducer