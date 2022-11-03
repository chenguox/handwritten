import * as actionType from './constants'

export const addNumberAction = (num) => ({
  type: actionType.ADD_NUMBER,
  num,
})

export const subNumberAction = (num) => ({
  type: actionType.SUB_NUMBER,
  num,
})
