import "./module";
import { getReactOutput } from "./react-renderer-module";

const arr = [1, 2, 3, 4, 5];
console.log(arr.map((n) => n ** 2));

const [first, second, ...rest] = arr;
console.log(first, second, rest);

console.log(`first + second = ${first + second} in this equation`);

const sum = (a, b = 2, c, d = 3) => {
  return a + b + c + d;
};
console.log(sum(1, undefined, 3));

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};
const { name, ...attrs } = obj;
console.log(name, attrs);

console.log("Hello, world!");

console.log("Here is some React output:");
console.log(getReactOutput());
