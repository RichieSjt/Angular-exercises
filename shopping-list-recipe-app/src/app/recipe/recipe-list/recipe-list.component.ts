import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Test', 'Test description', 'https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg/public/2022-05/Tomato-Pie_0258-1.jpg?itok=HuL4XZJV'),
        new Recipe('Test', 'Test description', 'https://www.kingarthurbaking.com/sites/default/files/styles/hero_lg/public/2022-05/Tomato-Pie_0258-1.jpg?itok=HuL4XZJV'),
    ]

    constructor () {

    }

    ngOnInit() {

    }
}
