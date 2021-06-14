# Recipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Kanban Tasks

### Task: ngModel on template form

1. Check values on templated-form using ngModel
2. Check: each control has ngModel and name atributes
3. Check: formsModule add to app.module
4. Check: ```<form (ngSubmit)="onSubmit(f)" #f="ngForm" >```
5. Fill out form and look for user values

![Check ngModel ](/check-form-vals.jpg)

```TypeScript
onSubmit(form: NgForm) {
    console.log(form);
  }
```

Task: Add validation 'rquired'

1. Angular adds class to check ... ng-dirty ng-valid...
2. Disable button if form not valid

```TypeScript
<button
        class="btn btn-primary"
        type="submit"
        [disabled]="!f.valid"
        >Submit</button>
```
