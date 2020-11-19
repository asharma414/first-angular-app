import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model'
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }


}
