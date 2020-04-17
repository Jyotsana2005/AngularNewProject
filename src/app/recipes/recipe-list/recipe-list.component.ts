import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service'
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[]=
  [
    new Recipe('A test recipe', 'jhdsjf', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'),
    new Recipe('A test recipe', 'jhdsjf', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA')
  ]
  constructor() { }
  // constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
