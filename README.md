# Recipe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Kanban Tasks: Project Refs

1. Video Ref. <https://learning.oreilly.com/videos/angular-the-complete>

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

### Task: Radio Buttons

1. ```<input type="radio">```

### Task: @ViewChild()

1. ```@ViewChild('f') signupForm" NgForm;```
2. Gives access to a template component

3. This is a method to change all the form values
4. Video Ref <https://learning.oreilly.com/videos/angular-the-complete/9781788998437/9781788998437-video15_17/>

![@ChildView](/ChildView.jpg)

## Task: patchValue()

1. This is a method to change one specific
2. Uses a JavaScript literal 'user' user = {name: '', gender: ''...}

![patchValue](PatchVal.jpg)

## Task: output form summary on submit

![Form summary output](FormSummary.jpg)

![tempate dispay on submit](DisplayOnSubmit.jpg)

## Task: Reset the form

1. ```this.myform.reset( <optional default values>);```
2. TODO: Asignment onsolution at end of Ch15

### Task: Rective Forms: TODO: Asignment onsolution at end of Ch15

### TODO: Ch16 Course Project - Forms

1. something

### TODO: Chp19 Couse Project - Http

### TODO: 'Angular Universal' pre rending on the server

## Chapter 3 : Course Project - The Basics

### Task: Setting up the Application

1. Add Bootstrap ```npm i bootstrap --save```
2. Update file: angular.json for bundle generation
3. plugin Emit

```javascript
path is relative to root of project
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": []
          },
```

### Task: Create components

![component plan](components.jpg)

### Task: Using components

### Task: Adding a Navigation Bar

### Task: Creating a "Recipe" Model

### Task: Adding Content to the Recipes' Components

### Task: Displaying Recipe Details

1. NOTE for Emmet in VSCode <https://code.visualstudio.com/docs/editor/emmet>
2. NOTES <https://docs.emmet.io/actions/expand-abbreviation/>

### Task: Working on the ShoppingList Component

### Task: ShoppingEdit Component

### Task: Binding to Custom Properties

1. ref <https://learning.oreilly.com/videos/angular-the-complete/9781788998437/9781788998437-video5_4/>

### Task: Binding to Custom Events

1. ref <https://learning.oreilly.com/videos/angular-the-complete/9781788998437/9781788998437-video5_6/>
