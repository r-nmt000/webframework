import {CollectionView} from "./CollectionView";
import {User, UserProps} from "../models/User";
import {UserShow} from "./UserShow";
import {Collection} from "../models/Collection";

export class UserList extends CollectionView<User, UserProps>{
    constructor(protected parent: Element, protected collection: Collection<User, UserProps>) {
        super(parent, collection);
    }
    renderItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render();
    }
}