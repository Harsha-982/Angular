import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingList-receipe-book';
  loadedFeature='recipe'

  // onNavigate(feature2Navigate:string){
  //   this.loadedFeature=feature2Navigate;
  // }
}
