import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { NoRecipeSelectedComponent } from './recipe/no-recipe-selected/no-recipe-selected.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: NoRecipeSelectedComponent},
    {path: 'new', component: RecipeEditComponent}, 
    {path: ':id', component: RecipeDetailComponent}, 
    {path: ':id/edit', component: RecipeEditComponent}, 
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
