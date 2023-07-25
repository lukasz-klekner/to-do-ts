export const renderCategories = (category, categoryContainer, updateCategoryCallback) => {
    console.log({
        category,
        categoryContainer,
        updateCategoryCallback,
    });
    category.forEach((categoryName) => {
        const categoryElement = document.createElement("li");
        const categoryId = `category-${categoryName}`;
        const categoryRadioElement = document.createElement("input");
        categoryRadioElement.type = "radio";
        categoryRadioElement.name = "category";
        categoryRadioElement.value = categoryName;
        categoryRadioElement.id = `${categoryId}`;
        categoryRadioElement.addEventListener("change", (event) => {
            updateCategoryCallback(categoryName);
        });
        const categoryLabelElement = document.createElement("label");
        categoryLabelElement.setAttribute("for", `${categoryId}`);
        categoryLabelElement.innerHTML = categoryName;
        categoryElement.appendChild(categoryRadioElement);
        categoryElement.appendChild(categoryLabelElement);
        categoryContainer.appendChild(categoryElement);
    });
};
