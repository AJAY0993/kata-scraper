function  calculateAge(birthDate,calAge) {
  
// enter your code here.
  let diff = Math.abs(birthDate - calAge)
  diff = diff>1 ? `${diff} years` : `${diff} year`
return birthDate == calAge ? `You were born this very year!` : birthDate > calAge ?`You will be born in ${diff}.` : `You are ${diff} old.`
}

