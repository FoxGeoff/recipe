import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  @Input() ingredientToDelete!: Ingredient;
  msgIngredient = "Please select an ingredient from he list";


  constructor() { }

  ngOnInit(): void {
  }
  /* using template properties
  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    console.log(`item ${nameInput.value}, qty ${amountInput.value}`);
  }
  */
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);

    //debug
    console.log(`Item: ${ingName} qty ${ingAmount}`);
  }

  OnDeleteItem() {

    if (this.ingredientToDelete) {
      // post "Delete Ingredent OK?"
      // Raise an Event onIngredientDelete(ingredientSelected)
      // delete select ingredient form Ingredients
      this.msgIngredient="";
      //debug code
      console.log(`OnDeleteItem:`, this.ingredientToDelete);
    } else {
      this.msgIngredient = "Please select an ingredient from he list"
    }
  }

}
