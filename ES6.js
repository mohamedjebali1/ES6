var pets = [
    { name: `Max`, type: `dog`, bornOn: 2018 },
    { name: `Angel`, type: `cat`, bornOn: 2015 },
    { name: `Jasper`, type: `dog`, bornOn: 2016 }
  ];

  let getAge=(pet)=>{return new Date().getFullYear() - pet.bornOn;}
  
  var petsWithAge = [];
  pets.forEach(pet=>{
    age = getAge(pet);
    petsWithAge.push(pet);
  });
  console.log(petsWithAge);
  
  var dogs = [];
  pets.forEach(pet=>{
    if (pet.type == `dog`)
    dogs.push(pet);
  });
  console.log(dogs);
  
  var jasper;
  pets.forEach(pet=>{
    if (pet.name === `Jasper`) 
      jasper = pet;
  });
  console.log(`Jasper is ${getAge(jasper)} years old`);