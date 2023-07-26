export class Task {
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

export enum Category {
  GENERAL = "general",
  HOBBY = "hobby",
  ATHLETICS = "athletics",
  WORK = "work",
}
