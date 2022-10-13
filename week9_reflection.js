//Reflection R9 Searching and Sorting II; Memoization

//Question 1

function make_optimized_search(A) {
    const mem = [];
    return x => { if (!is_undefined(mem[x])) {
                      return mem[x];  
                  } else {
                      mem[x] = linear_search(A, x);
                      return mem[x];
                  }
          };
}

//Quesiton 1
//Fastest Search would be binary search, but needs to sorted. So we can sort, then search
//So we use the fastest sort (Merge Sort)(nlogn) and the fastest search (BInary Search)(logn)
// But cuz we cant modify original array as mentioned by the qn, we need to make a copy

function make_correct_optimized_search(A) {
    const len = array_length(A)
    let B = []
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    merge_sort(B);
    return x => binary_search(B, x)
}




//Question 2a
function fib(n) {
    const store = [];
    for (let i = 0; i <= n; i = i + 1) {
        if (i === 0) {
            store[i] = 0;
        } else if (i === 1) {
            store[i] = 1;
        } else {
            store[i] = store[i - 1] + store[i - 2];
        }
    }
    return store[n];
}


//Question 2b
function var_fib(n) {
    let first = 0;
    let second = 1;
    
    if (n === 0 || n === 1) {
        return n;
    }
    for (let i = 2; i < n; i = i + 1) {
        i % 2 === 0 ? first = first + second : second = first + second;
    }
    return first + second;
}

//Question 3
// Order of growth in  time = n 
// order of growth in space = n


























