export interface ArticleInterface {
  title: string;
  description: string;
  content: string;
  author: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id?: number;
    name: string;
  };
}
