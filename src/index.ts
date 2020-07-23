import { User } from "./models/User";
import axios from "axios";

const user = new User({id: 1});

user.fetch();

user.set({name: 'new name'});

user.save();

