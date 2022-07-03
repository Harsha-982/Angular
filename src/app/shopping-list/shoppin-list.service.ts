import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

    public ingredientSelected=new EventEmitter<Ingredient []>();

    private ingredients:Ingredient[]=[
        new Ingredient("Apples",5),
        new Ingredient("Tomatos",10)
      ];
      
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
       this.ingredients.push(ingredient)
       this.ingredientSelected.emit(this.ingredients.slice())
    }

    addIngredients(ingredientsOfSelectedRecipe:Ingredient[]){
        // for(let ingredient of ingredientsOfSelectedRecipe){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredientsOfSelectedRecipe)
        this.ingredientSelected.emit(this.ingredients.slice())
        console.log(this.getIngredients())
    }
}