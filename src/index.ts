import { User } from "./models/User";
import axios from "axios";
import {UserForm} from "./views/UserForm";

const user = User.build({id: 1});

user.on('save', () => {
    console.log(user);
});

user.save();

const userForm = new UserForm(
    document.getElementById('root'),
    user
);


userForm.render();

