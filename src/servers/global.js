import request from '../utils/request';

export function fetchUser() {
  return request('/api/user');
}

