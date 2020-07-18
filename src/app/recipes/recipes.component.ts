import { Component, OnInit, AfterContentChecked } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, AfterContentChecked {
  recipeIn: Recipe;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    console.log(this.recipeIn);
  }
}
