export default {
  // 支持值为 Object 和 Array
  'GET /api/dolist'(req, res) {
    setTimeout(() => {
      res.json([
        {
          title: 'hao'
        },
        {
          title: 'buhao'
        }
      ])
    }, 2000);
  }
};