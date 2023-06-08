import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  onShowRecipeDetail = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Nice pizza',
      'https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg/public/2022-05/Tomato-Pie_0258-1.jpg?itok=HuL4XZJV',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'Burguer',
      'A really big burguer',
      'https://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2019/09/portada-wp-burguer.jpeg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
