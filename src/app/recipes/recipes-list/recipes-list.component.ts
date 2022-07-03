import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{

 
  // @Output() recipeSelectedInList= new EventEmitter<Recipe>();
  listOfRecipes!:Recipe[];
  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.listOfRecipes=this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe:Recipe){
  //   this.recipeSelectedInList.emit(recipe)
  // }

  onAddNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

}
