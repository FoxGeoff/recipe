import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() ingredient!:Ingredient;
  @Output() ingredientSelected = new EventEmitter<Ingredient>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngrdientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onIngredientSelected(ingredient: any) {
    this.ingredient = ingredient;

    //debug code
    console.log(`onIngredientSelected:`, ingredient);
  }
}
