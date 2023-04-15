#First Solution (The best)

class Solution(object):
    def pivotIndex(self, nums):
        total = sum(nums)
        leftSum = 0
        for i,v in enumerate(nums):
            if (leftSum == (total - v - leftSum)):
                return i
            leftSum+=v
        return -1

testCase = [1,7,3,6,5,6]
print(Solution().pivotIndex(testCase))

testCase = [1,7,3,6,5,6]
print(Solution().pivotIndex(testCase))