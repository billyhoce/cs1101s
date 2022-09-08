//QUESTION 1 (flatten_list)

// function flatten_list(to_be_flattened) {
//     function make_list(item) {
//         return accumulate((x, y) => pair(x, y), null, item);
//     }
//     return accumulate((a, b) => append(make_list(a), b), null, to_be_flattened);

// }

//QUESTION 1 CORRECT ANSWER
// function flatten_list(list1) {
//     return accumulate(append, null, list1);
// }

// const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
// display_list(flatten_list(LoL));






//QUESTION 2 (tree_sum)

// function tree_sum(tree) {
//     return is_list(tree)
//           ? accumulate((x, y) => tree_sum(x) + y, 0, tree)
//           : tree;
// }

// const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7, 8));
// tree_sum(my_tree);






//QUESTION 3 (accumulate_tree)

function accumulate_tree(f, op, initial, tree) {
 return accumulate((x, y) => is_list(x) 
                             ? op(accumulate_tree(f, op, initial, x),y) 
                             : op(f(x),y),
                             initial, tree);
}

function tree_sum(tree) {
 return accumulate_tree(x => x, (x, y) => x + y, 0 , tree);
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));
tree_sum(my_tree);
