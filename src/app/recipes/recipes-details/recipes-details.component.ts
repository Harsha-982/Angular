import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  id!:number;
  recipeDetails!:Recipe

  constructor(private recipeService:RecipeService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (parms:Params)=>{
        this.id=+parms['id']
        this.recipeDetails=this.recipeService.getRecipe(this.id)
      }
      )
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDetails.ingredients)
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
