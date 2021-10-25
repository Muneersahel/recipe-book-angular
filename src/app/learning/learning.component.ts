import {Component, OnInit} from "@angular/core";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-learning',
  template: `
    <div class="container">
      <app-user-active></app-user-active>
      <app-user-inactive></app-user-inactive>
    </div>
  `,
  providers: [UsersService],
})
export class LearningComponent{

  constructor() {
  }

}
