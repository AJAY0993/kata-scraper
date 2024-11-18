def good_vs_evil(good, evil):
    g = {
        0: 1,  # Hobbit
        1: 2,  # Men
        2: 3,  # Elves
        3: 3,  # Dwarves
        4: 4,  # Eagles
        5: 10  # Wizards
    }
    
    e = {
        0: 1,  # Orcs
        1: 2,  # Men
        2: 2,  # Wargs
        3: 2,  # Goblins
        4: 3,  # Uruk Hai
        5: 5,  # Trolls
        6:10   # Wizards
    }
    
    # Calculate the sum of good and evil armies
    good_sum = sum(g[i] * int(x) for i, x in enumerate(good.split()))
    evil_sum = sum(e[i] * int(x) for i, x in enumerate(evil.split()))
    
    # Determine the result
    s = good_sum - evil_sum
    if s > 0:
        return "Battle Result: Good triumphs over Evil"
    elif s < 0:
        return "Battle Result: Evil eradicates all trace of Good"
    else:
        return "Battle Result: No victor on this battle field"
