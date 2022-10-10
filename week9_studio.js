//Q1
//Value of x is 0.
//When the change function is called, a new frame was created that declares the 
//variable x. Hence, the assignment of new_value to x alters the value of x only 
//in that frame, not the original x in the main program frame.

// Q2
function d_filter(pred,xs) {
    if (is_null(xs)) {
        return null;
    } else if (pred(head(xs))) {
        set_tail(xs, d_filter(pred, tail(xs)));
        return xs;
    } else {
        return d_filter(pred, tail(xs));
    }
}

const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
d_filter(x => x % 2 === 0, L); // returns [2, [4, [6, [8, null]]]]
L; //L is [1, [2, [4, [6, [8, null]]]]]