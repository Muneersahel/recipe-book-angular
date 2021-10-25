import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  template: `
    <div class="row">
      <div class="col-xs-12">
        <form>
          <div class="row">
            <div class="col-sm-5 form-group">
              <label for="name">Name</label>
              <input type="text" id="name" #nameInput class="form-control">
            </div>
            <div class="col-sm-2 form-group">
              <label for="amount">Amount</label>
              <input type="number" id="amount" #amountInput class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <button class="btn btn-success" type="button" (click)="onAddItem()">Add</button>
              <button class="btn btn-danger" type="button">Delete</button>
              <button class="btn btn-primary" type="button">Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }

}
