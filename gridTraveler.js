//Time Complexity without memo will be 2 ^(m+n)

const gridTraveler = (m,n,memo = {}) => {
    const key = m + ',' + n;

    if(key in memo) return memo[key]; // return this value if the value is already computed

    if(m == 1 && n == 1) return 1;
    if(m == 0 || n == 0) return 0;
    
    let down = gridTraveler(m-1,n,memo);
    let right = gridTraveler(m,n-1,memo);
  return memo[key] = down + right;
};

console.log(gridTraveler(18,18,memo = {}));
console.log(memo)