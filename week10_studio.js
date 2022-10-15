//Question 2a
// Order of growth of runtime = n^2

//Question 2b
// function bubblesort_list(L) {
//     const len = length(L);
//     function helper(xs, count, max) {
//         if (count === max) {
//             return 0;
//         }
//         else if (head(xs) > head(tail(xs))) {
//             const temp = head(xs);
//             set_head(xs, head(tail(xs)));
//             set_head(tail(xs), temp);
//             helper(tail(xs), count + 1, max);
//         } else {
//             helper(tail(xs), count + 1, max);
//         }
//     }
//     for (let i = len - 1; i >= 1; i = i - 1) {
//         helper(L, 0, i);
//     }
// }
// const LL = list(3, 5, 2, 4, 1);
// bubblesort_list(LL);
// LL; // should show [1, [2, [3, [4, [5, null]]]]]

//Question 3a
// Yes. Consider cc(20, 3). Then it will evaluate in order
// cc(20, 2)
// cc(20, 1)
// cc(15, 1)
// cc(10, 1)
// cc(5, 1)
// cc(10, 2)
// cc(10, 1)
// cc(5, 1)
// cc(10, 1)...
// as seen, there are repeated calls of cc with the same argument

//Question 3b
// let A = [];
// function cc(amount, kinds_of_coins) {
//     if (amount === 0) {
//         return 1;
//     } else if (amount < 0 || kinds_of_coins === 0) {
//         return 0;
//     } else if (is_undefined(A[amount]) || is_undefined(A[amount][kinds_of_coins])) {
//         const temp = cc(amount, kinds_of_coins - 1)
//                      +
//                      cc(amount - first_denomination(kinds_of_coins),kinds_of_coins);
//         A[amount] = [];
//         A[amount][kinds_of_coins] = temp;
//     }
//     return A[amount][kinds_of_coins];
// }

// function first_denomination(kinds_of_coins) {
//  return kinds_of_coins === 1 ? 5 :
//  kinds_of_coins === 2 ? 10 :
//  kinds_of_coins === 3 ? 20 :
//  kinds_of_coins === 4 ? 50 :
//  kinds_of_coins === 5 ? 100 : 0;
// }

// cc(20, 3);

//Question 3c
//order of growth in time = n
//order of growth in space = n





