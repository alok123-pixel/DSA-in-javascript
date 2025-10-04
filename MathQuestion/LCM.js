// In this we have to find the LCM of an two number
function Lcm(a,b){
    let res = Math.max(a,b);
    while(true){
        if(res%a === 0 && res%b === 0){
            return res;
        }
        res++;
    }
    return res;
}

console.log(Lcm(4,6));
