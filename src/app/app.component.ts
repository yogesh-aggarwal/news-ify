import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "newsify";

  refreshContent() {
    console.log("refresh content");
    location.reload();
  }
}
