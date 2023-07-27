import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../models/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  firebaseUrl = '';

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(this.firebaseUrl)
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(`${this.firebaseUrl}/recipes.json`, recipes)
      .subscribe((response) => console.log(response));
  }

  constructor(private http: HttpClient, private recipeService: RecipeService) {}
}
