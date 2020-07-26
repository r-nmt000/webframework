import {Collection} from "../models/Collection";

export abstract class CollectionView<T, K> {
    protected constructor(protected parent: Element, protected collection: Collection<T, K>) {
    }

    abstract renderItem(model: T, itemParent: Element): void;

    render(): void {
        console.log('userlist render is called');
        console.log(parent);

        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');

        for (let model of this.collection.models) {
            const itemParent = document.createElement('div');
            this.renderItem(model, itemParent);
            templateElement.content.append(itemParent);
        }
        console.log(templateElement);
        this.parent.append(templateElement.content);
    }
}