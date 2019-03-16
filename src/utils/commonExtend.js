import modelExtend from 'dva-model-extend'

const model = {
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}

const commonExtend = (routeModel) => modelExtend(model, routeModel)

export default commonExtend

export {
  model,
  commonExtend,
}