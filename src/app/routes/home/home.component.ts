import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { ArticleInterface } from "../../services/interfaces";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  articles: Array<ArticleInterface> = [];
  currentArticle: string = "";

  constructor(private dataService: DataService) {}

  readPost(url: string) {
    this.currentArticle = url;
    console.log(`read post: ${url}`);
  }

  ngOnInit() {
    this.dataService.getHomeArticles().subscribe(({ articles }) => {
      this.articles = articles;
    });
  }
}
