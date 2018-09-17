import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-shopping-list';

  public activeTab: string = "recipes";

  recipesTabActive() {
    return this.activeTab === "recipes";
  }

  shoppingTabActive() {
    return this.activeTab === "shopping";
  }

  onNavigate(activeTab: string) {
    this.activeTab = activeTab;
  }
}
