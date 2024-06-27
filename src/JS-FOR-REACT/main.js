import substraction, { sum } from "./math.js";

console.log(substraction(10, 9));
console.log(sum(10, 9));

const name = "Sagar";
const greeting = "My name is " + name;

console.log(greeting);

const a = 1;
const b = 5;
const c = "hey";
const d = `hi ${a} my ${b} hello ${c}`; //back tick (template literal), interpolation

console.log(d);

const obj = [
  { id: 1, name: "sag" },
  { id: 2, name: "kav" },
  { id: 3, name: "sam" },
];

console.log(obj.map((m) => m.key));
console.log(typeof d);
console.log(typeof obj);
console.log(obj.find((todo) => todo.name == "sam"));

console.log(obj.filter((ob) => ob.id == 1));

console.log(obj.forEach((todo) => (todo.name = "sam")));

console.log(obj.forEach((todo) => (todo.name = "sam")));

console.log(obj);
const todos = [
  { key: 1, value: "sag" },
  { key: 2, value: "kav" },
  { key: 3, value: "sam" },
];

todos.forEach((todo) => {
  console.log(todo.key + "::" + todo.value);
});

const newTodos = todos.map((todo) => {
  return { id: todo.key, name: todo.value };
});
console.log(newTodos);
