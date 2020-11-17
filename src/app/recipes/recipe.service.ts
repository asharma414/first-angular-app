import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe('Pasta', 
        'Delicious Pasta', 
        'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        [
            new Ingredient('Pasta Noodles', 1),
            new Ingredient('Sauce', 1)
        ]),
        new Recipe('Pasta', 
        'Delicious Pasta', 
        'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 
        [
            new Ingredient('Pasta Noodles', 1),
            new Ingredient('Sauce', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}