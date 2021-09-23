import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  /* '<form (ngSubmit)="onSubmit(f) #f>'

  onSubmit(form: HTMLFormElement) {
    console.log(form);
  } */

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
