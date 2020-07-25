import { User } from "./models/User";
import axios from "axios";
import {UserForm} from "./views/UserForm";

const user = new User({ name: 'NAME', age: 20});
const userForm = new UserForm(
    document.getElementById('root'),
    user
);

userForm.render();

