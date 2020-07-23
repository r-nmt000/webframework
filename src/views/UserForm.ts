export class UserForm {
    parent: Element;

    constructor(parent: Element) {
        this.parent = parent;
    }

    template(): string {
        return `
          <div>
            <h1>User Form</h1>
            <input />
          </div>
        `;
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.parent.append(templateElement.content);
    }
}