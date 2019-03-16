export default {
  // 支持值为 Object 和 Array
  'GET /api/user'(req, res) {
    setTimeout(() => {
      res.json({
        name: 'ronffy'
      })
    }, 1000);
  }
};