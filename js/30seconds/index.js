const htmlStr ='<p><em>lorem</em><strong>ipsum</strong></p>';
//lorem ipsum strip tags
//正则 replace splice 规则
//正则表达式[^>]*  在范围取值里面 []匹配< 之后的
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');
