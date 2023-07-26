import { Category } from "../types/types";
export class TaskClass {
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
