const fs = require('fs');
const files = [];
//一步步 目录走下去
const walk = function(path) {
    fs
        .readdirSync(path)
        .forEach(file => {
            const newPath = path + '/' + file;
            const stat = fs.statSync(newPath);
            // console.log(stat);

            //判断是不是文件
            if(stat.isFile()) { 
                //判断是不是js文件
                if(/\.js$/.test(file)) {
                    files.push(file);
                }
                //判断是不是目录
            }else if (stat.isDirectory()) {
                walk(newPath);
            }
            //文件？
                //是不是js文件？ 正则
            // 目录？
                //递归
            // console.log(item);
        })
        // fs.readdir(path, function(err, items) {
        //     console.log(items);
        // });
        console.log('啦啦啦');
}

walk('./src');
console.log(files);