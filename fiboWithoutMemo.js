//Time Complexity without memo will be 2 ^ N

const fibo = (n,) =>{
    if(n <= 2) return 1;
    return  fibo(n-1) + fibo(n-2);
    };
   console.log(fibo(50)) 