import { User } from "./models/User";
import axios from "axios";

const user = new User({name: 'name', age: 20});

user.set({name: 'new name'});

user.on('click', () => {
    console.log('click');
});

user.on('click', () => {
    console.log('click2');
});

user.trigger('click');

console.log(user.get('name'));
console.log(user.get('age'));


axios.post('http://localhost:3000/users', {
    name: 'my name',
    age: 20
});
