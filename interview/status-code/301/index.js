var http = require('http');

var server = http.createServer(function (req, res) {
  // 响应头部
  res.writeHead(301, {'Location': 'http://itbilu.com/'})
  console.log(res._header);
  res.end(); // 完成请求结束
});

server.listen(3000);