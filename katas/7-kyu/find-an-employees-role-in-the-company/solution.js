function findEmployeesRole(name) {
  // employees array preloaded 
  let result = "Does not work here!"
  employees.forEach(x => {if(x.firstName + ' ' + x.lastName === name ){
    result = x.role
  } 

                        }
                    
                        )
return result
}