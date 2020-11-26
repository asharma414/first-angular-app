import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import { RecipesComponent } from '../recipes/recipes.component';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put('https://angular-app-5ce94.firebaseio.com/recipes.json', recipes)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://angular-app-5ce94.firebaseio.com/recipes.json')
      .pipe(map(res => {
        return res.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        });
      }),
      tap(
        res => this.recipeService.setRecipes(res)
      )
    );
  }
}
