import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Output() emitRecipe: EventEmitter<void> = new EventEmitter<void>();

  @Input() recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  displayDetails() {
    this.emitRecipe.emit();
  }

}
