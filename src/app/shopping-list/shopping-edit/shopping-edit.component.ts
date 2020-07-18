import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  currentIngridient: Ingredient;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() addButtonClicked = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngridient() {
    const name_ = this.nameInputRef.nativeElement.value;
    const amount_ = +this.amountInputRef.nativeElement.value;
    this.addButtonClicked.emit(new Ingredient(name_, amount_));
  }
}
