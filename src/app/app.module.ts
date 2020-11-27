import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingListEditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipeListComponent } from './recipes/recipelist/recipelist.component';
import { RecipeItemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipeDetailComponent } from './recipes/recipedetail/recipedetail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive'
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { RecipeSelectComponent } from './recipes/recipeselect/recipeselect.component';
import { RecipeEditComponent } from './recipes/recipeedit/recipeedit.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeSelectComponent,
    RecipesComponent,
    DropdownDirective,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
