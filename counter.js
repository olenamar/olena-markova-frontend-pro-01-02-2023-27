function getCounter(){
    let counter = 0;
    return function(number){
        counter+= number;
        return counter;
    }
  }
  const count = getCounter();

  console.log(count(5));  
  console.log(count(7));  
  console.log(count(10));