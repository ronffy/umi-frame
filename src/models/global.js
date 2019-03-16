import { fetchUser } from '../servers/global';
import commonExtend from '../utils/commonExtend';

export default commonExtend({

  namespace: 'global',

  state: {
    userInfo: {},
    isLogin: false,
  },

  subscriptions: {
    setup({ dispatch }) {
      // dispatch({ type: 'query' })
      const userInfo = window.localStorage.userInfo && JSON.parse(window.localStorage.userInfo);
      if (userInfo) {
        dispatch({
          type: 'updateState',
          payload: {
            userInfo,
            isLogin: true,
          }
        })
      }
    },
  },

  effects: {
    *queryUser({ payload }, { call, put }) { // eslint-disable-line
      const { username, password } = payload;
      const { data } = yield call(fetchUser, {
        username,
        password
      });
      window.localStorage.userInfo = JSON.stringify(data);
      yield put({
        type: 'updateState',
        payload: {
          userInfo: data,
          isLogin: true
        } 
      });
    },
    * logout(action, { put }) {
      window.localStorage.userInfo = '';
      yield put({
        type: 'updateState',
        payload: {
          userInfo: {},
          isLogin: false
        }
      });
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

});
