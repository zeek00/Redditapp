import * as one from "./One"

export function foo() {
  // This function works fine in production but throws on our local test machine
  //throw new Error('failed to do expensive network stuff');
console.log('dd');

}

export function bar() {
  // ...

 // foo();
 //const one = require("./One")
  //const a = one.a()
  
  const b = one.b(8)
  one.a()
  const c = b
  const bazz = baz()
  //return c;
}

export function baz() {
  // ...
  foo();
  return 50;
}