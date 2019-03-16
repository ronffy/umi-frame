export default {
  // 支持值为 Object 和 Array
  'GET /api/dolist'(req, res) {
    setTimeout(() => {
      res.json([
        {
          title: '任务1'
        },
        {
          title: '任务2'
        }
      ])
    }, 2000);
  }
};