import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserForm extends View<User, UserProps> {

    eventsMap(): {[key:string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    };

    onSaveClick = (): void => {
        this.model.save();
    };

    template(): string {
        return `
          <div>
            <h1>User Form</h1>
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
            <input placeholder="${this.model.get('name')}"/>
            <button class="set-name">Set name</button>
            <button class="set-age">Set random age</button>
            <button class="save-model">Save model</button>
          </div>
        `;
    }

}