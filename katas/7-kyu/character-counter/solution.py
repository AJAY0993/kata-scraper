def validate_word(word):
    #your code here
    char_count = {}
    for char in word.lower():
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    counts = list(char_count.values())
    return all(count == counts[0] for count in counts)
