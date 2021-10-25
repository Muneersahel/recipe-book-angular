import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <button class="btn btn-success">New Recipe</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <app-recipe-item
          *ngFor="let recipeEl of recipes"
          [recipe]="recipeEl"
          (recipeSelected)="onRecipeSelected(recipeEl)"
        ></app-recipe-item>
      </div>
    </div>
  `,
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[]
  constructor(private recipeService: RecipesService) { }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
