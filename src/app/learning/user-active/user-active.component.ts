import {Component, Input, OnInit} from "@angular/core";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-active',
  template: `
    <ul class="list-group">
      <h3 class="list-group-item-heading">Active User</h3>
      <li class="list-group-item" *ngFor="let user of activeUsers let i = index">
        {{ user }} | <a href="#" (click)="onSetToInactive(i)">Send to Inactive</a>
      </li>
    </ul>
  `,
})
export class UserActiveComponent implements OnInit{
  activeUsers: string[] = []

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

}
