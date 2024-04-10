# Debug Challenge: Finding the Maximum Element from Multiple Lists

## Overview:
This challenge involves extracting the maximum element from each of the lists provided in the `data` object and storing them in an array called `result`. However, the initial implementation has some bugs that need to be fixed.

## Debug Steps:
1. **Identify Data Structure**: Understand the structure of the `data` object which contains a list of lists, where each inner list represents a named list of numbers.
   
2. **Extract Lists**: Use array indexing to extract the individual lists (`first`, `second`, and `third`) from the `data` object.

3. **Find Maximum Element**: Implement the `extractBiggest` function to find the maximum element from the three lists. Make sure to handle cases where lists may be empty or have equal maximum elements.

4. **Test and Debug**: Test the function with provided data and debug any issues that arise.

## Code Changes:
- Define variables `first`, `second`, and `third` to hold the lists from the `data` object.
- Implement the `extractBiggest` function to find the maximum element from the lists.
- Push the maximum elements found into the `result` array.
- Run the code to verify correctness.
