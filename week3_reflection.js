/*Q1    f(y => y + z) {
            const z = 3;
            return g(z)
        }
        =================
        f(y => y + z) {
            const z = 3;
            return z => z + z
        }
        =================
        f(y => y + z) {
            const z = 3;
            return 6
        }
        =================
        6
*/

//Q2
function my_sum(n){
    return n === 0 ? 0 : n * (n + 1) + my_sum(n - 1);
}

/*Q3
Recursive process. Time: Θ(n), Space: Θ(n)
*/

/*Q4
function my_sum(n) { return sum(<T1>, <T2>, <T3>, <T4>); }
T1: x * (x + 1)
T2: a
T3: x => x + 1  
T4: n
*/

//Q5
function sum(term, a, next, b, counter) {
return a > b
? 0
: sum(term, next(a), next, b, counter + term(a));
}

/*Q6
(a) x, f, g, y, h
(b) "return x => x + g(x);"
    First x is a declaration, other 2 x are refering to this declaration
    g refers to the input of the f function as declared in "function f(g) {"
    
    "const h = (y, f) => y(f);"
    First y and f are declarations, subsiquent ones refer to this declaration
    
    "return h(f, y)"
    h refers to function declared in "const h =..."
    f and y refer to inputs to function g as declared in "function g(f, y) {"
    
(c) 12
(d) 7
*/

































