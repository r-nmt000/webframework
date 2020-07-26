import {User, UserProps} from "./models/User";
import axios from "axios";
import {UserForm} from "./views/UserForm";
import {Collection} from "./models/Collection";
import {UserEdit} from "./views/UserEdit";
import {UserList} from "./views/UserList";

// const user = User.build({id: 1});
// const root = document.getElementById('root');
//
// if (root) {
//     const userEdit = new UserEdit(root, user);
//     userEdit.render();
// } else {
//     throw new Error('Root element not found');
// }
//

const users = new Collection(
    'http://localhost:3000/users',
    (json: UserProps) => {
        return User.build(json);
    });

users.on('change', () => {
    console.log('change is called');
    const root = document.getElementById('root');
    if (root) {
        console.log('root exists');
        new UserList(root, users).render();
    }
});

users.fetch();

