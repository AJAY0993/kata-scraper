def all_non_consecutive(arr):
    return [{'i':i, 'n':arr[i]} for i in range(len(arr)) if i > 0 and arr[i] != arr[i - 1] + 1]