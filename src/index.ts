import {User, UserProps} from "./models/User";
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

const collection = User.buildUserCollection();

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
