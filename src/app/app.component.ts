import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';

  /* '<form (ngSubmit)="onSubmit(f) #f>'

  onSubmit(form: HTMLFormElement) {
    console.log(form);
  } */

  onSubmit(form: NgForm) {
    console.log(form);
  }
}