import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  /* not required here!
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef!: ElementRef;
  @ViewChild('imageInput') imageInputRef!: ElementRef;
 */

  @Output() recipeSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'Shak Shuka',
      'Just a test of the fantastic tomato and egg dish.',
      'https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg'),
    new Recipe(
      'Shak Shuka',
      'Just a test of the fantastic tomato and egg dish.',
      'https://get.pxhere.com/photo/egg-dish-food-cuisine-ingredient-produce-menemen-recipe-comfort-food-brunch-meal-frittata-Queso-flameado-breakfast-side-dish-poached-egg-turkish-food-indian-cuisine-1620832.jpg')
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onSelectedRecipe(recipe: Recipe) {
    const recipeName = recipe.name;
    const recipeDescription = recipe.description;
    const recipeImage = recipe.imagePath;
    const selectedRecipe = new Recipe(recipeName, recipeDescription, recipeImage);
    this.recipeSelected.emit(selectedRecipe);

    //debug
    console.log(`name ${recipeName} - description ${recipeDescription}`)
  }
}
