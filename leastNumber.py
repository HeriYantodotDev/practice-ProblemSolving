""""Input: arr = [4,3,1,1,3,3,2], k = 3  Output: 2
#Psedeou Code 
#First Turn the array to the Object 
#Sort the object based on the frequency
#Make a loop then substract the value till K = 0
#Count the object that still has more than 0
"""

class Solution(object):
    def findLeastNumOfUniqueInts(self, arr, k):
        #First Turn the array to the Object
        obj = {}
        for i in arr:
            obj[i] = ((obj.get(i,0)) or 0) + 1
        #Sort the object based on the frequency
        sortedValues = sorted([value for value in obj.values()])
        # sortedValues = dict(sorted(obj.items(), key=lambda item: item[1]))
        #Make a loop start substract the value till K = 0
        loopIndex = 0
        while k > 0:
            if k >= sortedValues[loopIndex]:
                k-= sortedValues[loopIndex]
                sortedValues[loopIndex] = 0
                loopIndex+=1
            elif k < sortedValues[loopIndex]:
                sortedValues[loopIndex]-=k
                k=0
        #Count the object that has value more than 0

        return len([value for value in sortedValues if value > 0])

arr = [4,3,1,1,3,3,2]
k = 3

print (Solution().findLeastNumOfUniqueInts(arr,k))

