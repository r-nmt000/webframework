import { User } from "./models/User";
import axios from "axios";
import {UserForm} from "./views/UserForm";

const user = new User({ name: 'record', age: 30});

user.on('change', () => {
    console.log('user was changed');
});

console.log(user.get('name'));

function show() {
    console.log(this);
}

show();

const userForm = new UserForm(
    document.getElementById('root'),
    user
);


userForm.render();

