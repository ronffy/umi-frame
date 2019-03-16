import React from 'react';
import { connect } from 'dva';


function DoList({ list, loading }) {
  if (loading) {
    return <div>加载中...</div>
  }
  return (
    <div>
      {
        !list || !list.length
        ? '空'
        : (
          list.map((item, index) => (
            <div key={index}>{item.title}</div>
          ))
        )
      }
    </div>
  );
}

DoList.propTypes = {
};

export default connect(({ dolist, loading }) => ({
  list: dolist.list,
  loading: loading.effects['dolist/queryList']
}))(DoList);
