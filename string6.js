// Method 1:
const solve=(str) => {
    let sum = 0;
for (let i=0;i<str.length;i++){
    if (str[i]>= '0' && str[i] <= '9'){
        sum+= Number(str[i]); 
    } 
    
} return sum }
    console.log(solve('HR05-AA-2669'))


// Method 2:

const solve1 = (str)=> {
    let sum1 = 0;
    for (let j=0;j<str.length;j++) 
    // ASCII value 
    {
        if (str.charCodeAt(j)>=48 && str.charCodeAt(j)<=57){
            sum1+=Number(str[j])
        }
    } 
    return sum1

} 
    console.log(solve1('HR05-AA-2669'))