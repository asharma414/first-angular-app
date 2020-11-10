import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingListEditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipeListComponent } from './recipes/recipelist/recipelist.component';
import { RecipeItemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipeDetailComponent } from './recipes/recipedetail/recipedetail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
