import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  articleActive: boolean = false;
  articleURL: string;

  constructor(private http: HttpClient) {}

  getHomeArticles(): Observable<any> {
    let type: string = "everything";
    let query: string = "google";
    let sortBy: string = "popularity";
    let from: string = "";
    let to: string = "";
    let domains: string = "wsj.com,nytimes.com,abcnews.go.com";
    let apiKey: string = "0e94d361549a4124bedecf19d665a526";
    let country: string = "us";

    let url = `https://newsapi.org/v2/${type}?q=${query}&sortBy=${sortBy}&from=${from}&to=${to}&language=en&apiKey=${apiKey}`;
    return this.http.get(url);
  }
}
