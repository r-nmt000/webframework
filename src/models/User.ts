import {Eventing} from "./Eventing";
import {Sync} from "./Sync";
import {Attributes} from "./Attributes";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhsot:3000/users';

export class User {
    public events = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>("");
    public attributes: Attributes<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }


    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.attributes.set({age: age});
    }
}