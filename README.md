# practice
This repository is a collection of algorithm problems and answers, which are parts of my learning journey. Please feel free to give any feedback on the solutions. 

##  String Modification
Create a function which takes two arguments, a string and a number. Return a list which consists of several string items, and the length of the list and strings are the same as the second argument. Each item in the list is derived from the order number based on the second argument. 
Example:

fct('fboaor',2) #['foo', 'bar']

fct('fbboaaorz',3) #['foo', 'bar', 'baz']

fct('sejpgoagkmse',3) #['spam', 'eggs', 'joke']

**Solution**: 
Python : [fct.py](./fct.py "Solution in Py")

## Clean The Room Function
given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 

For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 


Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

**Solution** : 
JS : [cleanTheRoom.js](./cleanTheRoom.js "Solution in JS")

##  Find Substraction Variable
Create a function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number.

For example: answer([1,2,3], 4)should return [1,3]

**Solution** : 
JS: [findvariable.js](./findvariable.js "Solution in JS")

##  Running Sum of 1d Array (From Leetcode: 1480 )
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]

Output: [1,3,6,10]

Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

**Solution** : 
JS: [runningSum.js](./runningSum.js "Solution in JS")
PY : [runningSum.py](./runningSum.py "Solution in PY")

##  Find Pivot Index (From Leetcode: 724)
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0

**Solution** :
JS: [findPivotIndex.js](./findPivotIndex.js "Solution in JS")
PY : [findPivotIndex.py](./findPivotIndex.py "Solution in PY")

## Least Number of Unique Integers after K Removals

Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

Example 1:

Input: arr = [5,5,4], k = 1

Output: 1

Explanation: Remove the single 4, only 5 is left.
* Since k = 1, we will remove exactly 1 element.
* Removing a single 5 will give the array as [5,4]. So a number of unique elements are 2.
* Removing a single 4 will give the array as [5,5]. So a number of unique elements are 1.
* Hence, removing 4 is optimal since it yields a minimum number of unique elements which is 1.
* The answer is 1.

Example 2:
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2

Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
* Since k = 3 we will remove exactly three elements from the input array such that a number of unique elements will be minimized.
* We can easily observe that removing [4,2] or either 1 or 3 will give exactly 2 distinct elements which is the minimum answer possible.

**Solution** :

JS: [leastNumber.js](./leastNumber.js "Solution in JS") [LeetCode](https://leetcode.com/submissions/detail/796046055/)

PY : [leastNumber.py](./leastNumber.py "Solution in PY") [LeetCode](https://leetcode.com/submissions/detail/796093250/)