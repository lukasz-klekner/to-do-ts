import { Category } from "../types/types";

interface Logger {
  logCreationDate: () => void;
}

export class TaskClass implements Logger {
  public name: string;
  public isDone: boolean;
  public category?: Category;

  private createdAt: Date;

  constructor(
    name: string,
    isDone: boolean,
    category: Category = Category.GENERAL
  ) {
    this.name = name;
    this.isDone = isDone;
    this.category = category;
    this.createdAt = new Date();
  }

  public logCreationDate() {
    console.log(`This task has been created at ${this.createdAt}`);
  }
}
