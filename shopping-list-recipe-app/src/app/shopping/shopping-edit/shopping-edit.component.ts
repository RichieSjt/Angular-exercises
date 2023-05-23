import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  @ViewChild('nameInput', { static: false }) nameRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountRef: ElementRef;

  createIngredient = () => {
    this.shoppingListService.addNewIngredient(
      new Ingredient(
        this.nameRef.nativeElement.value,
        this.amountRef.nativeElement.value
      )
    );
  };
}
