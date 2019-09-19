import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  news = null;
  constructor() {}

  fetch() {
    let country = `us`;
    let apiKey = `0e94d361549a4124bedecf19d665a526`;

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
      if (this.status === 200) {
        localStorage.setItem("response", this.responseText);
      }
    };
    xhr.send();
    this.news = JSON.parse(localStorage.getItem("response")).articles
    console.log(this.news)
  }

  readPost(url: string) {
    console.log(`read post: ${url}`)
  }

  ngOnInit() {
    this.fetch();
  }
}
