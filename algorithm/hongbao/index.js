function hongbao(total,num){
    const arr=[];
    let restAmount=total;//余额初始化为总金额
    let restNum=num;//剩下的个数初始化为总个数
    
    for(let i=0;i<num-1;i++){//最后一个不发
        //平均值的两倍
        let amount= parseFloat(Math.random()*(restAmount/restNum*2))//增强随机感
        .toFixed(2);//保留两位小数
        restAmount-=amount;//restAmount=restAmount-amount
        restNum--;
        arr.push(amount);
    }
    //最后一个人restAmount
    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(20,44));