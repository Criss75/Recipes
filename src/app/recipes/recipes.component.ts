import { Recipe } from "./recipe.model";
import { Component, OnInit, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}
}
