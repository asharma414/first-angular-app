import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model'


@Injectable()
export class ShoppingListService {
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(i: number) {
        return this.ingredients[i];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }


  updateIngredient(i: number, newIngredient: Ingredient) {
    this.ingredients[i] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(i: number) {
      this.ingredients.splice(i, 1);
      this.ingredientAdded.next(this.ingredients.slice());
  }
}