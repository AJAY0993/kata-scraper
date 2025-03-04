import functools
def missing_no(nums):
    #Your code here
    sum = 101/2*(100)
    actualSum = functools.reduce(lambda n,acc: n + acc, nums)
    return sum - actualSum