import { User } from "./User";

console.log("hi");

const user = new User({ name: "myName", age: 20 });
console.log(user.get("name"));
