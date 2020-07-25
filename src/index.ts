import { User } from "./models/User";
import axios from "axios";
import {UserForm} from "./views/UserForm";
import {Collection} from "./models/Collection";

// const user = User.build({id: 1});
//
// user.on('save', () => {
//     console.log(user);
// });
//
// user.save();

const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => {
    console.log(collection);
});

collection.fetch();

// const userForm = new UserForm(
//     document.getElementById('root'),
//     user
// );
//
//
// userForm.render();
//
