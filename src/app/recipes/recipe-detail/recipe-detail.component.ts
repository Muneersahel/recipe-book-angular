import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <img
          src="{{ recipe.imagePath }}"
          alt="{{ recipe.name }}"
          class="img-responsive"
          style="max-height: 250px">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <h1>{{ recipe.name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <div class="btn-group" appDropdown>
          <button
            class="btn btn-primary dropdown-toggle"
            type="button">
            Manage Recipe <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a (click)="onAddToShoppingList()">To Shopping List</a></li>
            <li><a href="">Edit Recipe</a></li>
            <li><a href="">Delete Recipe</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        {{ recipe.description }}
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let ingredient of recipe.ingredients">
            {{ ingredient.name }} - {{ ingredient.amount }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

}
