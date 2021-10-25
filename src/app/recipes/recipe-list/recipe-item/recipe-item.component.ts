import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipes.model';
import {RecipesService} from "../../recipes.service";

@Component({
  selector: 'app-recipe-item',
  template: `
    <a
      href="#"
      class="list-group-item clearfix"
      (click)="onSelect()"
    >
      <div class="pull-left">
        <h4 class="list-group-item-heading">{{ recipe.name }}</h4>
        <p class="list-group-item-text">{{ recipe.description }}</p>
      </div>
      <span class="pull-right">
        <img
          [src]="recipe.imagePath"
          alt="{{ recipe.name }}"
          class="img-responsive"
          style="max-height: 50px">
      </span>
    </a>

  `,
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeServices: RecipesService) { }

  ngOnInit(): void {
  }
  onSelect(): void {
    this.recipeServices.recipeSelected.emit(this.recipe);
  }
}
