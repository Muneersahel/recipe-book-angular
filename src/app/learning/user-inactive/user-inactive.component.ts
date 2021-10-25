import {Component, OnInit} from "@angular/core";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user-inactive',
  template: `
    <ul class="list-group">
      <h3 class="list-group-item-heading">Inactive User</h3>
      <li class="list-group-item" *ngFor="let user of inactiveUsers let i = index">
        {{ user }} | <a href="#" (click)="onSetToActive(i)">Send to Active</a>
      </li>
    </ul>
  `,
})
export class UserInactiveComponent implements OnInit{
  inactiveUsers: string[] = [];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

}
