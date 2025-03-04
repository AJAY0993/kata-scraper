def tram(stops, descending, onboarding):
    curr_pas = 0;
    min_cap = 0;
    for i in range(stops):
        curr_pas-= descending[i]
        curr_pas+= onboarding[i]
        min_cap = max(curr_pas, min_cap)
    return min_cap