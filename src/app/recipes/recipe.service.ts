import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppin-list.service";
import { Recipe } from "./recipes.model";
@Injectable()
export class RecipeService{

    constructor(private shoppingListService:ShoppingListService){}

    public recipeSelected=new EventEmitter<Recipe>();

    private listOfRecipes:Recipe[] =[
        new Recipe("Chicken",
        "This dish is an compensation dish for today..",
        "https://tse1.mm.bing.net/th/id/OIP.bv1iSuELTSfOY2joUomqhgHaLH?pid=ImgDet&rs=1",
        [
            new Ingredient('Meat',200),
            new Ingredient('SpicesPack',45)
        ]),
        new Recipe("Coconut Shrimp",
        "Tasty likes home made..",
        "https://tse4.mm.bing.net/th/id/OIP.3bJTAVbDbRyvXsa7HR8YWAHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        [
            new Ingredient('Coconut',30),
            new Ingredient('Shrimps',20),
            new Ingredient('Spieces',45)
        ])
      ];

      getRecipe(index:number){
          return this.listOfRecipes[index]
      }

      getRecipes(){
          return this.listOfRecipes.slice()
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.shoppingListService.addIngredients(ingredients);

      }
}