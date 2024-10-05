function flyTime (dist, train, fly) {
    //Happy coding
  if(train === 0) return null
  const timeLeftInCollision = dist/(train*2)
  const flyDistance = fly*timeLeftInCollision
  return flyDistance
}
