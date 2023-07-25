export interface Task {
  name: string;
  isDone: boolean;
  category?: Category;
}

export type Category = "general" | "hobby" | "athletics" | "work";
