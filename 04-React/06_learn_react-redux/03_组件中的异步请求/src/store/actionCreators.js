import * as actionType from './constants'

export const changeBannerAction = (banners) => ({
  type: actionType.CHANGE_BANNER,
  banners,
})

export const changeRecommendAction = (recommends) => ({
  type: actionType.CHANGE_RECOMMEND,
  recommends,
})
