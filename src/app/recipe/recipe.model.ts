import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Recipe {
  public name!: string;
  public description!: string;
  public imagePath!: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

}
