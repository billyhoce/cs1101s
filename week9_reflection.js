//Reflection R9 Searching and Sorting II; Memoization

//Question 1

// function make_optimized_search(A) {
//     const mem = [];
//     return x => { if (!is_undefined(mem[x])) {
//                       return mem[x];  
//                   } else {
//                       mem[x] = linear_search(A, x);
//                       return mem[x];
//                   }
//           };
// }

//Question 2a
// function fib(n) {
//     const store = [];
//     for (let i = 0; i <= n; i = i + 1) {
//         if (i === 0) {
//             store[i] = 0;
//         } else if (i === 1) {
//             store[i] = 1;
//         } else {
//             store[i] = store[i - 1] + store[i - 2];
//         }
//     }
//     return store[n];
// }


//Question 2b
// function var_fib(n) {
//     let first = 0;
//     let second = 1;
    
//     if (n === 0 || n === 1) {
//         return n;
//     }
//     for (let i = 2; i < n; i = i + 1) {
//         i % 2 === 0 ? first = first + second : second = first + second;
//     }
//     return first + second;
// }






























