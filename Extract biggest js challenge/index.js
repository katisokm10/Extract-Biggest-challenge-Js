
const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}

// Only edit below

// Define variables to hold the lists from the data object
const first = data.lists[0][1];
const second = data.lists[1][1];
const third = data.lists[2][1];

// Define an array to store the results
const result = [];

// Define a function to extract the biggest number from the lists
const extractBiggest = () => {
    // Check if the first list is not empty and its last element is the largest
    if (first.length > 0 && (first.slice(-1)[0] >= second.slice(-1)[0]) && (first.slice(-1)[0] >= third.slice(-1)[0])) {
        return first.pop(); // Return and remove the last element from the first list
    } 
    // Check if the second list is not empty and its last element is the largest
    else if (second.length > 0 && (second.slice(-1)[0] >= third.slice(-1)[0])) {
        return second.pop(); // Return and remove the last element from the second list
    } 
    // Check if the third list is not empty
    else if (third.length > 0) {
        return third.pop(); // Return and remove the last element from the third list
    } 
    else {
        return undefined; // Return undefined if all lists are empty
    }
}



// Only edit above
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result) 

