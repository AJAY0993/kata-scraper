def is_flush(cards):
    # Write your code in here!
    a = cards[0][-1]
    for i in range(len(cards)):
        if cards[i][-1] != a:
            return False
    return True
        
    