import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
    @Output() onRecipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Test', 'Test description', 'https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg/public/2022-05/Tomato-Pie_0258-1.jpg?itok=HuL4XZJV'),
        new Recipe('Recipe 2', 'This is a new recipe', 'https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg/public/2022-05/Tomato-Pie_0258-1.jpg?itok=HuL4XZJV'),
    ]

    constructor () { }

    ngOnInit() { }
    
    showRecipeDetail = (recipe: Recipe) => {
        this.onRecipeSelected.emit(recipe)
    }
}
