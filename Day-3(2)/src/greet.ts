function greet<T>(name: T): string {
  return `Hello, ${name}`;
}

let greetFunc = greet("Rohit");
console.log(greetFunc)
