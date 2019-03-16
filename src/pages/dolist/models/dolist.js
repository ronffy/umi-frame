import { fetchDolist } from '../services/dolist';
import commonExtend from '../../../utils/commonExtend';

export default commonExtend({

  namespace: 'dolist',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(location => {
        if (location.pathname.includes('dolist')) {
          dispatch({
            type: 'queryList'
          })
        }
      })
    },
  },

  effects: {
    *queryList(action, { call, put }) { // eslint-disable-line
      const { data } = yield call(fetchDolist);
      yield put({
        type: 'updateState',
        payload: {
          list: data
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

})
