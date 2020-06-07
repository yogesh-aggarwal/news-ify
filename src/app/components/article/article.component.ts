import { Component, OnInit, Input } from "@angular/core";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: "article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
