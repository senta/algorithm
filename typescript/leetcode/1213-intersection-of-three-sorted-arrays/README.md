# 1213. Intersection of Three Sorted Arrays

https://leetcode.com/contest/biweekly-contest-10/problems/intersection-of-three-sorted-arrays/

Given three integer arrays `arr1`, `arr2` and `arr3` **sorted** in **strictly increasing order**, return a sorted array of **only** the integers that appeared in **all** three arrays.

## Example 1:

```
Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
```

## Constraints:

- `1 <= arr1.length, arr2.length, arr3.length <= 1000`
- `1 <= arr1[i], arr2[i], arr3[i] <= 2000`


## Solution 01 - Brute Force (?)

The solution I first came up with. First, loop over `arr1` to set counter 1. Then loop over `arr2` to increment the counter if the number exists. Do the same for `arr3`. But for this time, put the number to an array instead of increasing the counter.

- speed: _O(N)_ N = total number of elements in arr1, arr2 and arr3.
- memory: _O(N)_ N = total number of elements in arr1

## Solution 02 - Brute Force v2

This is a refactored version of Solution 01. Loop over `arr1` and `arr2` and `arr3` at the same time and count the number appearance. Then iterate the counter to find the numbers which has 3 as it value.

- speed: _O(2 * N)_ max length of the arrays + total number of elements in arr1, arr2 and arr3.
- memory: _O(N)_ N = total number of elements in the all arrays.

This is slower than solution 01 actually.

## Solution 03

The solution I found on "Discussion." This one is robust. It checks all arrays incrementally.

- speed: _O(N)_ N = ... ? I'm not sure.
- memory: _O(N)_ N = intersection numbers.