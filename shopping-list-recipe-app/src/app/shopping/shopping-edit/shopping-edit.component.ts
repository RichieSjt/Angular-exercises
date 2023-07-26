import {
  Component, ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('mainForm') mainForm: NgForm
  subscription: Subscription
  editMode = false
  editedItemIdx: number
  editedItem: Ingredient

  createIngredient = (mainForm: NgForm) => {
    const value = mainForm.value
    const newIngredient = new Ingredient(value.name, value.amount)

    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIdx, newIngredient)
    } else {
      this.shoppingListService.addNewIngredient(newIngredient);
    }

    this.clearForm()
  };

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editedItemIdx)
    this.clearForm()
  }

  clearForm() {
    this.mainForm.reset()
    this.editMode = false
  }

  ngOnInit() {
    this.subscription = this.shoppingListService.selectedItemForEdit.subscribe(
      (index: number) => {
        this.editMode = true
        this.editedItemIdx = index
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.mainForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  constructor(private shoppingListService: ShoppingListService) {}
}
