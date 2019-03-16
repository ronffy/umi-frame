import React from 'react';
import { connect } from 'dva';

function Dothing({ username }) {
  return (
    <div>
      do some thing
    </div>
  );
}

Dothing.propTypes = {
};

export default connect(({ global }) => ({
  username: global.userInfo.name
}))(Dothing);
