import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import Login from '../components/Login';
import styles from './layout.less';
import { routerRedux } from 'dva/router';
import NProgress from 'nprogress'

export type BasicLayoutComponent<P> = React.SFC<P>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
  isLogin: boolean;
  dispatch: any;
  loading: any;
}

let previousPath;
const BasicLayout: BasicLayoutComponent<BasicLayoutProps> = props => {
  const { loading, isLogin, dispatch, location } = props;

  const currentPath = location.pathname + location.search
  if (currentPath !== previousPath) {
    NProgress.start()
  }
  if (!loading.global) {
    NProgress.done()
    previousPath = currentPath
  }

  if (!isLogin) {
    return <Login loading={loading.effects['global/queryUser']} />
  }
  const handleLogout = () => {
    dispatch({
      type: 'global/logout'
    })
  }
  const routerTo = path => {
    dispatch(routerRedux.push(path))
  }
  return (
    <div className={styles.layoutRoot}>
      <Button onClick={routerTo.bind(null, '/')}>首页</Button>
      <Button onClick={routerTo.bind(null, '/user')}>个人中心</Button>
      <Button onClick={routerTo.bind(null, '/dolist')}>列表</Button>
      <Button type="primary" onClick={handleLogout} >退出</Button>
      <hr />
      {props.children}
    </div>
  );
};

export default connect(({ global, loading }) => ({
  isLogin: global.isLogin,
  loading,
}))(BasicLayout);
