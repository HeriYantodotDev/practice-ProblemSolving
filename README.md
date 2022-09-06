# practice
This repository is a collection of algorithm problems and answers, which are parts of my learning journey. Please feel free to give any feedback on the solutions. 

##  String Modification
Create a function which takes two arguments, a string and a number. Return a list which consists of several string items, and the length of the list and strings are the same as the second argument. Each item in the list is derived from the order number based on the second argument. 
Example:

fct('fboaor',2) #['foo', 'bar']

fct('fbboaaorz',3) #['foo', 'bar', 'baz']

fct('sejpgoagkmse',3) #['spam', 'eggs', 'joke']

Solution: 
Python : [fct.py](./fct.py "Solution in Py")

## Clean The Room Function
given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 

For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 


Bonus: Make it so it organizes strings differently from number types. 
i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

Solution : JS : [cleanTheRoom.js](./cleanTheRoom.js "Solution in JS")

##  Find Substraction Variable
Create a function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number.

For example: answer([1,2,3], 4)should return [1,3]

Solution : [findvariable.js](./findvariable.js "Solution in JS")