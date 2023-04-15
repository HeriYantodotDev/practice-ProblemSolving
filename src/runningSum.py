# Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
# Return the running sum of nums.

class Solution(object):
    def __init__(self):
        self._nums = []
    def runningSum(self, nums):
        self._nums = nums 
        for i in range(1, len(self._nums),1):
            self._nums[i]+= self._nums[i-1]
        return self._nums

nums1 = [1,2,3,4] # expected [1,3,6,10]
nums2 = [1,1,1,1,1] # expected [1,2,3,4,5]

test = Solution()
print(test.runningSum(nums1))
print(test.runningSum(nums2))