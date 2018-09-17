import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2p1srdVEcDxxWT-S3PCozuhK4HIy5GMzVLE0vZ8W2WcuRyO_44A'),
    new Recipe('A test recipe2', 'this is simply a test2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2p1srdVEcDxxWT-S3PCozuhK4HIy5GMzVLE0vZ8W2WcuRyO_44A')
  ];

  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }


}
