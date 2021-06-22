import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';

@Component({
  selector: 'app-recipes',
  template: `
    <div class="row">
      <div class="col-md-5">
        <app-recipe-list (recipeWasSelected)="selectedRecipe = $event"></app-recipe-list>
      </div>
      <div class="col-md-7">
        <app-recipe-detail
          *ngIf="selectedRecipe; else infoText"
          [recipe]="selectedRecipe"></app-recipe-detail>
        <ng-template #infoText>
          <p>Please select a Recipe!</p>
        </ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;
  constructor() {
  }
  ngOnInit(): void {
  }
}
