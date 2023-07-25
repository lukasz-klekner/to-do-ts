export interface Task {
  name: string;
  isDone: boolean;
  category?: Category;
}

export enum Category {
  GENERAL = "general",
  HOBBY = "hobby",
  ATHLETICS = "athletics",
  WORK = "work",
}
