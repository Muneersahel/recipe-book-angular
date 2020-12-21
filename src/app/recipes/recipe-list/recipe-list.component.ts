import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'Simply a Test Recipe', '../../../assets/images/sample-image.webp'),
    new Recipe('A Test Recipe 2', 'Simply a Test Recipe', '../../../assets/images/sample-image.webp'),
    new Recipe('A Test Recipe 3', 'Simply a Test Recipe', '../../../assets/images/sample-image.webp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }


}
