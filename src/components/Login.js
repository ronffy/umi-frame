import React from 'react';
import { connect } from 'dva';
import Button from 'antd/lib/button';


function Login({ dispatch, loading }) {
  const handleClick = () => {
    dispatch({
      type: 'global/queryUser',
      payload: {
        username: 'ronffy',
        password: '123456'
      }
    })
  }
  return (
    <Button 
      type="primary" 
      disabled={loading} 
      onClick={handleClick}
    >
      {loading ? '登录中' : '登录'}
    </Button>
  );
}

Login.propTypes = {
};

export default connect()(Login);
