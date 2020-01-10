import { Recipe } from "./recipe.model";
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a simple test",
      // tslint:disable-next-line: quotemark
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"
    ),
    new Recipe(
      "A test2 recipe",
      "This is a simple test2",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"
    ),

    new Recipe(
      "A test3 recipe",
      "This is a simple test3",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"
    ),

    new Recipe(
      "A test4 recipe",
      "This is a simple test4",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
