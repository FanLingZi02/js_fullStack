如何实现红包算法
固定金额的红包， 由若干个人来抢,规则？

1. 抢到金额之和等于红包金额，不能超过，也不能少于。
2. 手气王，0.01至少，
3. 金额随机，（用js里面的随机数生成）产生一个随机数，确保公平，每个人抢到金额的概率相同

计算过程，变量计算的本质
发钱？ total（总钱数）= restAmount（剩下多少钱）restAmount会改变，total不改变
restNum（剩下的个数）== num（总个数）testNum-- num不变
随机一次, restAmount=total-随机数
restNum--
最后一个人，拿最后的钱，for（i=0；i<num-1;i++）（排除最后那个人）
每次随机，钱数是我们需要的，push 数组里，
总和，

Math是数学对象
Math.random（）
parseFloat（） 解析为浮点数

总和，

Math是数学对象
Math.random（）
parseFloat（） 解析为浮点数
类型转换 "23.2"=>23.2  parseFloat
0-9 之间的随机整数  Math.floor(Math.random()*10);   比如（2.3）floor向下（2） ceil向上（3） round四舍五入（2）
let max=100；
let min=0；
最小值与最大值之间的数
min+Math.floor(Math.random()*(max-min));
