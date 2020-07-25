import { User } from "./models/User";
import axios from "axios";
import {UserForm} from "./views/UserForm";

const user = new User({id: 2});

user.on('change', () => {
    console.log(user);
});

user.fetch();

const userForm = new UserForm(
    document.getElementById('root'),
    user
);


userForm.render();

