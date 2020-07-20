import { User } from "./models/User";

const user = new User({name: 'name', age: 20});

user.set({name: 'new name'});

console.log(user.get('name'));
console.log(user.get('age'));
