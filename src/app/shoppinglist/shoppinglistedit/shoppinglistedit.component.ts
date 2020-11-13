import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() itemAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    this.itemAdded.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
  }

}
