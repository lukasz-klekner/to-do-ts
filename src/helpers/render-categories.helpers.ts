import { Category } from "../types/types";

export const renderCategories = (
  category: Category[],
  categoryContainer: HTMLUListElement,
  updateCategoryCallback: (category: Category) => void
) => {
  category.forEach((categoryName) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const categoryId = `category-${categoryName}`;

    const categoryRadioElement: HTMLInputElement =
      document.createElement("input");
    categoryRadioElement.type = "radio";
    categoryRadioElement.name = "category";
    categoryRadioElement.value = categoryName;
    categoryRadioElement.id = `${categoryId}`;

    categoryRadioElement.addEventListener("change", (event: Event) => {
      updateCategoryCallback(categoryName);
    });

    const categoryLabelElement: HTMLLabelElement =
      document.createElement("label");
    categoryLabelElement.setAttribute("for", `${categoryId}`);
    categoryLabelElement.innerHTML = categoryName;

    categoryElement.appendChild(categoryRadioElement);
    categoryElement.appendChild(categoryLabelElement);

    categoryContainer.appendChild(categoryElement);
  });
};
