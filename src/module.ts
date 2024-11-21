console.log("hello from module file");

type Gender = "Male" | "Female";
interface Person {
  name: string;
  age: number;
  gender: Gender;
}

const p: Person = {
  name: "John",
  age: 30,
  gender: "Male",
};

console.log(p);
