import { Recipe } from "./../recipe.model";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
