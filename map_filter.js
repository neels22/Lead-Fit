


// arrow functions 
// difference between arrow and normal functions 


const sum = (a,b)=>{
    return a+b 
}



//// map 

// returns an array by performing function on each array element 


const input  = [1,2,3,4,5]

const ans =input.map((a)=>{

    return a*2

})

console.log(ans)

function transform(a) 
{
  return a*a*a  
}

const ans1 = input.map(transform)
console.log(ans1)



//// filter

// returns an array with elements of the other array that satisfy the condition


function evenodd(n) {
    if (n%2==0) {
        return true 
    }
}

const ans2 = input.filter(evenodd)
console.log(ans2)

