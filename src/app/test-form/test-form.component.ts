import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  /* '<form (ngSubmit)="onSubmit(f) #f>'

  onSubmit(form: HTMLFormElement) {
    console.log(form);
  } */

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
