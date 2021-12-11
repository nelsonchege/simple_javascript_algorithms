// ----------------------------------------------------------------quiz----------------------------------------------------------------
// In mathematics, the least common multiple (LCM) of two or more integers is the smallest positive integer that is divisible by each of the given integers.

// For example, the LCM of 4 and 6 is 12.

// Implement this algorithm in Javascript or TyeScript as a function `leastCommonMultiple(n1: number, n2: number)` that takes two integers returns the LCM of the given integers.
// ----------------------------------------------------------------quiz----------------------------------------------------------------

function LeastCommonMultiple(n1, n2){
    // determine which number is the largest and smallest between the two inputed number
    var larger_number;
    var smaller_number;
    if(n1 < n2){
        larger_number  = n2;
        smaller_number = n1;
    }
    else{
        larger_number  = n1;
        smaller_number = n2;
    }
    // create a variable that will save the multiple number
    let least_Common_Multiple_Number = 0;

    // create a varible only used to keep the loop going as long as the lcm is not found
    let unknown_value = larger_number + 1;

    // create a while loop that will keep on looping as long as the ,ultiple is not found
    while(least_Common_Multiple_Number===0){

        // a for loop that multiplies the largest number to i starting from 1,2,3....unknown_value
        for(i=1; i<unknown_value; i++){
            var multiple_number = larger_number * i ;
            // an if statement that divides the generated value to the smallest number
            // the first number that returns a remainder of zero is the lcm
            if(multiple_number%smaller_number===0){
                least_Common_Multiple_Number=multiple_number;
            }
        }
        unknown_value++
    };
    console.log(least_Common_Multiple_Number);
}

const number1 = window.prompt("Enter first number: ");
const number2 = window.prompt("Enter second number: ");

LeastCommonMultiple(number1, number2);