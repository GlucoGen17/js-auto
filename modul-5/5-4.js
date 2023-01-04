const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };
  // Change code below this line
  
  const child = Object.create(parent);
  const newObject = Object.create(child);
  newObject.isPrototypeOf(child);
  
  // Change code above this line
  child.name = "Jason";
  child.age = 27;
  