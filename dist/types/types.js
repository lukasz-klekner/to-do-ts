export class Task {
    constructor(name, isDone, category = Category.GENERAL) {
        this.name = name;
        this.isDone = isDone;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate() {
        console.log(`This task has been created at ${this.createdAt}`);
    }
}
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["HOBBY"] = "hobby";
    Category["ATHLETICS"] = "athletics";
    Category["WORK"] = "work";
})(Category || (Category = {}));
