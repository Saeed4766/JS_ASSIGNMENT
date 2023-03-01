function sum(x,y){
    let result = (x + y)
    return result
  }
  console.log(sum(3,2))
  console.log(sum(-3,-6))
  console.log(sum(7,3))
  
  function nextNumber(x){
    let result = x+1
    return result
  }
  console.log(nextNumber(0))
  console.log(nextNumber(9))
  console.log(nextNumber(-3))
  
  function calcAge(ageInYear){
    let ageInDays = ageInYear*365
    return ageInDays
  }
  console.log(calcAge(65))
  console.log(calcAge(0))
  console.log(calcAge(20))
  
  function power(v,c){
    let result= v*c
    return result
  }
  console.log(power(230,10))
  console.log(power(110,3))
  console.log(power(480,20))
  
  function concatName(lName,fName){
    let result= "\"" + lName + ", " + fName +"\""
    return result
  }
  console.log(concatName("Johnny","Bravo"))
  console.log(concatName("Doe","John"))
  console.log(concatName("Jane","Mary"))
  
  function remainder(firstNumber,secondNumber){
    let result = firstNumber % secondNumber
    return result
  }
  console.log(remainder(1,3))
  console.log(remainder(3,4))
  console.log(remainder(-9,45))
  
  function giveMeSomething(something){
    let response = "something" + " " + something
    return response
  }
  console.log(giveMeSomething("is better than nothing"))
  console.log(giveMeSomething("Bob Jane"))
  console.log(giveMeSomething("something"))
  
  function carsNeeded(numberOfPassengers){
      let result = Math.ceil(numberOfPassengers /5)
      return result
    }
    console.log(carsNeeded(5))
    console.log(carsNeeded(11))
    console.log(carsNeeded(0))
    
    function numberArgs(){
      let result = arguments.length
      return result
    }
    console.log(numberArgs("a","b","c"))
    console.log(numberArgs("10","20","30","40", "50"))
    console.log(numberArgs("x"))
    console.log(numberArgs())
    
    function argType(x){
      let  result = typeof(x)
      return result
    }
    console.log(argType(1))
    console.log(argType("a"))
    console.log(argType("The man ran away"))