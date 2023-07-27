import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './models/recipe.model';
import { Observable } from 'rxjs';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipeService.getRecipes()
    
    // Only fetch when there are no recipes
    if(recipes.length === 0)
      return this.dataStorageService.fetchRecipes()
    else
      return recipes
  }

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }
}
