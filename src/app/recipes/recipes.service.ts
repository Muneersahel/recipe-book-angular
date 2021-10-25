import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model'
import {EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Nyama Choma',
      'A super tasty nyamachoma',
      '../../../assets/images/sample-image.webp',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French fries', 20)
      ]
    ),
    new Recipe(
      'Nyama Choma Tamu',
      'A super tasty nyamachoma',
      '../../../assets/images/sample-image.webp',
      [
        new Ingredient('Buns', 1),
        new Ingredient('French fries', 20)
      ]
    )
  ];


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
