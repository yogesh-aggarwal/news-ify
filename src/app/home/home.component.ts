import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  news = null;
  constructor() {}

  fetch(
    type: string = "everything",
    query: string = "google",
    sortBy: string = "popularity",
    from: string = "",
    to: string = "",
    domains: string = "wsj.com,nytimes.com,abcnews.go.com",
    apiKey: string = "0e94d361549a4124bedecf19d665a526",
    country: string = "us"
  ) {
    // let url = `https://newsapi.org/v2/everything?country=in&apiKey=${apiKey}`;
    let url = `https://newsapi.org/v2/${type}?q=${query}&sortBy=${sortBy}&from=${from}&to=${to}&language=en&apiKey=${apiKey}`;
    console.log(url);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
      if (this.status === 200) {
        localStorage.setItem("response", this.responseText);
      }
    };
    xhr.send();
    this.news = JSON.parse(localStorage.getItem("response")).articles;
    console.log(this.news);
  }

  readPost(url: string) {
    console.log(`read post: ${url}`);
  }

  ngOnInit() {
    this.fetch();
  }
}
