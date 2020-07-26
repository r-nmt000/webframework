import {User, UserProps} from "./models/User";
import axios from "axios";
import {UserForm} from "./views/UserForm";
import {Collection} from "./models/Collection";

const user = User.build({id: 1});
const root = document.getElementById('root');

if (root) {
    const userForm = new UserForm(root, user);
    userForm.render();
} else {
    throw new Error('Root element not found');
}



