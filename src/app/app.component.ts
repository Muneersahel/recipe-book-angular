import { Component } from '@angular/core';
import {UsersService} from "./learning/users.service";

@Component({
  selector: 'app-root',
  template: `
<!--    <app-header (featureSelected)="onNavigate($event)"></app-header>-->
<!--    <div class="container">-->
<!--      <div class="col-md-12">-->
<!--        <app-recipes *ngIf="loadedFeature === 'recipe'"></app-recipes>-->
<!--        <app-shopping-list *ngIf="loadedFeature !== 'recipe'"></app-shopping-list>-->
<!--      </div>-->
<!--    </div>-->
<app-learning></app-learning>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  title = 'course-project';
  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
