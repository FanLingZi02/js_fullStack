const http = require('http');
//解析请求
const formidable = require('formidable'); 
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  if(req.url === '/upload' && req.method.toLowerCase() === 'post'){
    //解析文件
    const form = new formidable.IncomingForm();
    form.uploadDir = './static/';
    form.parse(req, (err,fields, files) => {
      console.log(fields, files);
      const oldPath = files.upload.path;
      const fileName = files.upload.name;
      //static\\upload_a6011219e86e6c7a82cbc4007d8710e2
      const dirname = path.dirname(oldPath);
      //dirname === static/
      const newPath = path.join(dirname, fileName);
      fs.rename(oldPath, newPath, (err) => {
        res.writeHead(200, {
        'Content-Type': 'text/html'
      });
        res.end('success');
      })
    })
    return false;
  }
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(
    `
    <form action="/upload" method="POST" 
    enctype="multipart/form-data">
      <input type="file" name="upload">
      <input type="text" name="nickname">
      <input type="submit" value="submit">
    </form>
    `
  )
})
.listen(8081, () => {
  console.log('server is running port 8081');
})