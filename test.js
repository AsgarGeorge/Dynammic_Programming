const func = (n) =>{
    if(n == 0) return;
    console.log(n)
    func(n-1);
}

func(10);
