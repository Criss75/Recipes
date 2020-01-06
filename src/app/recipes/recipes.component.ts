import { Recipe } from "./recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a simple test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
