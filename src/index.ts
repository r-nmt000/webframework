import { User } from "./models/User";

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
