def consecutive(arr, a, b):
    # Do some magic
    for i in range(len(arr) -1):
        if arr[i] == a and arr[i + 1] == b:
            return True
        if arr[i] == b and arr[i + 1] == a:
            return True
    return False