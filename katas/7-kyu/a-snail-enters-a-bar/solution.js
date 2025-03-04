function canSnailReachEnd(length, speed, lengthIncreases) {
    //code
    const t = 365 * 24 * 60
    const totalLength = length + lengthIncreases * t
    
    return speed * t > totalLength;
}