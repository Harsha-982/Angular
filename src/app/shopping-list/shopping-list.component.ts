import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppin-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit{
ingredients!:Ingredient[]
 
constructor(private shoppingListService:ShoppingListService){}

// addIngredients(ingredient:Ingredient){
//   this.ingredients.push(ingredient)
// }
ngOnInit(){
  this.ingredients= this.shoppingListService.getIngredients()
  this.shoppingListService.ingredientSelected.subscribe(
    (ingredientArray:Ingredient[])=>{
      this.ingredients=ingredientArray
    }
  )
  console.log(this.ingredients)
  
}

}
