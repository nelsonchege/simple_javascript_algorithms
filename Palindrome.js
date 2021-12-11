// ----------------------------------------------------------------quiz----------------------------------------------------------------
// A palindrome is any string that can be reversed and still be the same.

// An example of one is 'radar', since it is spelled the same even after being reversed.

// Implement this algorithm in Javascript or TyeScript as a function `palindrome(str: string)` that takes a string and returns true if the string is a palindrome.
// ----------------------------------------------------------------quiz----------------------------------------------------------------

function palindrome(input_name) {

        // find the length of a name entered
        const len = input_name.length;

        // loop through half of the name
        for (let i = 0; i < len / 2; i++) {
    
            // check if first and last string of the name are same
            // repeats the loop for the second string and the second last string 
            // if the any difference is spoted then the the loop terminates
            if (input_name[i] !== input_name[len - 1 - i]) {
                return 'It is not a palindrome';
            }
           
        }
        // if no difference is found then the name is a palindrome
        return 'It is a palindrome';
}


const input_name = window.prompt('Enter a name: ');

let value =palindrome(input_name);

console.log(value)