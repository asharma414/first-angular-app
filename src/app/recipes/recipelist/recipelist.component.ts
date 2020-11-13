import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipelist.component.html',
    styleUrls: ['./recipelist.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
    ];

    constructor() {

    }

    onSelect(i) {
        this.recipeSelected.emit(this.recipes[i]);
    }

    ngOnInit() {

    }
}