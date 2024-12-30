//Time Complexity with memo will be O(N)


const fibo = (n, memo = {}) =>{
if(n in memo) return memo[n];   
if(n <= 2) return 1;
return memo[n] = fibo(n-1 , memo) + fibo(n-2,memo);
};

console.log(fibo(1000,memo = {}));
console.log(memo);