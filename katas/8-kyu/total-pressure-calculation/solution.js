solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  // your code goes here
  return (((givenMass1 / molarMass1) + (givenMass2 / molarMass2)) * ((temp + 273.15)*0.082)) / volume
}