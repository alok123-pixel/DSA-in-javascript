// Mereg sort in this we merge two array and make a single sorted array
function merge(a,b){
    let res = [];
    let m = a.length;
    let n = b.length;
    let i = 0, j = 0;
    while(i < m && j < n){
        if(a[i] < b[j]){
            res.push(a[i]);
            i++;
        }else{
            res.push(b[j]);
            j++;
        }
    }
    while(i < m){
        res.push(a[i]);
        i++;
    }
    while(j < n){
        res.push(b[j]);
        j++;
    }
    return res;
}
function mergesort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return merge(mergesort(left),mergesort(right));
}
console.log(mergesort([12,56,23,54,10,78,34,33]));