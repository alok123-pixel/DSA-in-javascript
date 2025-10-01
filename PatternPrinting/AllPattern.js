// ****
// ****
// ****
// ****
for(let i = 0; i < 4; i++){//Pattern 1)
    let star = ''
    for(let j = 0; j< 4; j++){
       star += '*'
    }
    console.log(star)
}
// --------------------------------
 //* *
//   * *
//   * * *
//  * * * * like this pattern       
 //*
for(let i = 0; i < 5; i++){
    let star = ''
    for(let j = 0; j <=i; j++){
       star+= '* '
    }
    console.log(star)
}

// ---------------------------

for(let i = 1; i < 5; i++){ 
    let num = ''
    for(let j = 1; j<=i; j++){
      num+=j
    }
    console.log(num)
}

// ---------------------
for(let i = 1; i < 5; i++){
    let num = ''
    for(let j = 1; j <= i; j++){
        num+=i;
    }
    console.log(num)
}


