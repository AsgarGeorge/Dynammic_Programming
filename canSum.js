/*
Notes :
n = targetSum
m = numbers.length

Brute Force: TC = O(n^m) , SC = O(m)
Memoization: TC = O(m*n) , SC = O(m)
*/


const canSum = (targetSum,numbers,memo= {}) =>{
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num of numbers){
        const remainder = targetSum - num;
        if(canSum(remainder,numbers) === true){
            memo[targetSum] = true; //memoization   
            return true;
        }
    }
    memo[targetSum] = false; //memoization
    return false;
};

console.log(canSum(7,[2,3])); //true
console.log(canSum(7,[5,3,4,7])); //true
console.log(canSum(7,[2,4])); //false
console.log(canSum(8,[2,3,5])); //true
console.log(canSum(20,[3,9])); //false