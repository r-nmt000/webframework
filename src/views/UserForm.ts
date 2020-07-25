import {User} from "../models/User";

export class UserForm {
    parent: Element;
    model: User;

    constructor(parent: Element, model: User) {
        this.parent = parent;
        this.model = model;
    }

    eventsMap(): {[key:string]: () => void } {
        return {
            'click:button': this.onButtonClick
        }
    }

    onButtonClick(): void {
        console.log('click!');
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            })
        }

    }

    template(): string {
        return `
          <div>
            <h1>User Form</h1>
            <div>User name: ${this.model.get('name')}</div>
            <input /><button>click me</button>
          </div>
        `;
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}