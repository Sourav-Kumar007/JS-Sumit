// 

const arr = [23 , 1 , 50 ,  2];

// function myFun(value , index , arr)
// {
//     console.log(value);
//     value++;
// }

// arr.forEach(myFun);
// console.log(arr);

const brr = arr.map(myBun);

function myBun(value)
{
    return value * 2;
}
console.log(brr);

function myRun(value)
{
    return value > 10;
}
const crr = arr.filter(myRun);
console.log(crr);

