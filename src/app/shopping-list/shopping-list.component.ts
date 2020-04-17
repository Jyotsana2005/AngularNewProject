import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]=[
  new Ingredient('apple',5),
  new Ingredient('TOMATO',5),
];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }
}
