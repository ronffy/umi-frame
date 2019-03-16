import React from 'react';
import { connect } from 'dva';

function Home({ username }) {
  return (
    <div>
      我的名字是：{username}
    </div>
  );
}

Home.propTypes = {
};

export default connect(({ global }) => ({
  username: global.userInfo.name
}))(Home);
