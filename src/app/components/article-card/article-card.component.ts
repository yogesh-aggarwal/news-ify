import { Component, OnInit, Input } from "@angular/core";
import { ArticleInterface } from "src/app/services/interfaces";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "article-card",
  templateUrl: "./article-card.component.html",
  styleUrls: ["./article-card.component.scss"],
})
export class ArticleCardComponent implements OnInit {
  @Input("article")
  article: ArticleInterface;

  constructor(private dataService: DataService) {}

  readPost(url: string) {
    this.dataService.articleActive = true;
    this.dataService.articleURL = url;
  }

  ngOnInit(): void {}
}
