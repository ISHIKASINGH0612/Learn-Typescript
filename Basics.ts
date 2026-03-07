function greeting (name : string) : string{
  return "Hello " + name + "!" ;
}

let message : string = greeting ("Ishika");
console.log(message);

//  let message: string  = greeting (121);
// console.log(message); 
// won't work because the function greeting is expecting a string argument, but we are passing a number (121). This will result in a type error.

