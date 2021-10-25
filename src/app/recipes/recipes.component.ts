import {Component, OnInit} from '@angular/core';
import {Recipe} from './recipes.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  template: `
    <div class="row">
      <div class="col-md-5">
        <app-recipe-list></app-recipe-list>
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
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit{
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipesService) {
  }
  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }
}
