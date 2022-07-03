import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppin-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput!:ElementRef;
  @ViewChild('amountInput') amountInput!:ElementRef;

  // @Output() ingredientsSelected=new EventEmitter<Ingredient>();


  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredients(){
    const ingredientnName=this.nameInput.nativeElement.value;
    const ingredientAmount=this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingredientnName,ingredientAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }
  deleteIngredients(){

  }
  clearAllIngredients(){

  }
}
