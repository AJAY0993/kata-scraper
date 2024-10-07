def odd_one(arr):
    # Code here
    for i in range(len(arr)):
        if arr[i]%2:
            return i
    return -1