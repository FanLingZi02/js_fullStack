//2.6
//4 17 5

//会计 年终奖
//绩效 S 5个月 A 3, B 2, C 1,D
//一个个的策略函数
var performanceX = function(salary) {
    return salary * 60;
}
var performanceS = function(salary) {
    return salary * 5;
}
var performanceA = function(salary) {
    return salary * 3;
}
var performanceB = function(salary) {
    return salary * 2;
}
var performanceC = function(salary) {
    return salary * 1;
}
var performanceD = function(salary) {
    return salary;
}

var calculateBounce = function(performanceLevl, salary) {
    if(performanceLevl === 'X') {
        return performanceX(salary);
    }
    if(performanceLevl === 'S'){
        return performanceS(salary);
    }
    if(performanceLevl === 'A'){
        return performanceA(salary);
    }
    if(performanceLevl === 'B'){
        return performanceB(salary);
    }
    if(performanceLevl === 'C'){
        return performanceC(salary);
    }
    if(performanceLevl === 'D'){
        return performanceD(salary);
    }
} 
//可以如何优化？分支太多，计算策略太简陋
//会计发钱的，制定发钱策略的区分开来，
console.log(calculateBounce('X', 20000));