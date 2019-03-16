import request from '../../../utils/request';

export function fetchDolist() {
  return request('/api/dolist');
}
