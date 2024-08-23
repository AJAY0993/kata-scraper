function getDrinkByProfession(param){
const jobToDrinkMapping = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal",
  "default": "Beer"
};
  return jobToDrinkMapping[param.toLowerCase()] || jobToDrinkMapping.default;
}