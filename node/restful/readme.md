- json 格式是标准的数据交换
- 前后端开发， /api json 格式来交流
- 全栈  fullstack

- restful 一切皆资源
暴露资源 

- 设计良好的URL
    /posts
    /posts/:id
    /comments
    /comments/:id
    /posts/:id/comments

HTTP 动词
Get  查询 
postman 加一条评论  增加一个资源
POST 新增  /comments
DELETE 动词 删除 /posts/2
修改 PUT
/comments/2 body 最美不过下雨天， 是与你.......
PUT 把全新的所有的内容  去替换掉旧的内容
PATCH 只要传递要更新的字段， 局部

- RESTFUL 考点
    认为一切皆资源  URL是唯一定位资源的的符号， 他有一定的设计原则
    HTTP动词是web资源的状态转换动词

    操作        SQL方法    HTTP动词
    CREATE      INSERT    POST
    READ        SELECT    GET
    UPDATE      UPDATE    PUT/PATCH
    DELETE      DELETE    DELETE