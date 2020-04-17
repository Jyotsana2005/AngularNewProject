import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'
// import {RecipeService} from '../../recipe.service'
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // providers:[RecipeService]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>()

  constructor() { }
  // constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onSelected() {
    this.recipeSelected.emit()
    // this.recipeService.recipeSelected.emit(this.recipe)
  }

}
