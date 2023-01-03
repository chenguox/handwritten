import axios from 'axios'
import * as actionType from './constants'

export const changeBannersAction = (banners) => ({
  type: actionType.CHANGE_BANNER,
  banners,
})

export const changeRecommendsAction = (recommends) => ({
  type: actionType.CHANGE_RECOMMEND,
  recommends,
})

export const fetchHomeMultidataAction = () => {
  return function(dispatch, getState) {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })
  }
}