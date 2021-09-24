import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    console.log(`item ${nameInput.value}, qty ${amountInput.value}`);
  }
}
