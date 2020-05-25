import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';
import { retry } from 'rxjs/operators';

@Injectable()
export class RequestArticlesService {
  constructor(private http: HttpClient) {}

  // FIXME config the url
  requestForArticles() {
    return this.http.get<Article[]>('url').pipe(retry(2));
  }

  // FIXME config the url
  requestForAArticle(objectId: string) {
    return this.http.get<Article>(`url/${objectId}`).pipe(retry(2));
  }
}
