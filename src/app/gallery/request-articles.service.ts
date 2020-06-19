import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { retry } from 'rxjs/operators';

@Injectable()
export class RequestArticlesService {
  constructor(private http: HttpClient) {}

  requestForArticles() {
    return this.http
      .get<Article[]>('https://arendelle.tech/api/get-articles')
      .pipe(retry(2));
  }

  requestForAnArticle(aid: string) {
    return this.http
      .get<Article>(`https://arendelle.tech/api/get-article/${aid}`)
      .pipe(retry(2));
  }
}
