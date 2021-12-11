// ----------------------------------------------------------------quiz----------------------------------------------------------------
// In mathematics, the sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// The algorithm consists of creating a list of consecutive integers from 2 through n (2 <= n <= 2^64) and marking them off as prime (or composite)

// Implement this algorithm in Javascript or TyeScript as a function `sieveOfEratosthenes(n: number)` that returns an array of all prime numbers up to (and including) `n`.
// ----------------------------------------------------------------quiz----------------------------------------------------------------


function sieve_of_eratosthenes(n){
    // create an array that is the length of n as specified by the users
    // 1 represents prime number and 0 represents not a prime number
    // fill each value in the array as a 1 assuming all values are prime
    let array1= Array(n).fill(1);

    // as we know that 0 and 1 are not prime numbers,change them to 0
    array1[0] = 0;
    array1[1] = 0;

    // this functions create a different array containing all the numbers from 0 to n-1
    function all_numbers(array_length){

        var func_array= Array()
        for(i=0;i<array_length;i++){
            func_array.push(i);
        }
        return func_array;
    };
    // calling the function 
    var array2=all_numbers(n);

    // starting from 2 it save all the multiples of i as 0 till i<=n
    // this repeats the loop if i==1 then changes the multiples into 0
    for(i=2;i<=n;i++){
        if(array1[i]===1){
            for(j=2;i*j<=n;j++){
                array1[i*j] = 0;
            }
        };
    };
    // this functions compares two arrays;one containing o and 1 and the other array contains numbers 0 to n-1
    // on a third array values are stored that are from the second array(n-1) but are stored as 1 in the first array(0 and 1)
    var final_array= Array()
    for(i=0;i<=n;i++){
        if(array1[i]===1){
            final_array.push(array2[i])
        }
    };
    // this stores the last number into the array
    var final_number = n;
    final_array.push(final_number);
    console.log(final_array);
}

const number = window.prompt("Enter length of array you want: ");

sieve_of_eratosthenes(number);