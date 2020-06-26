import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequestArticlesService } from './request-articles.service';
import { Data } from '@angular/router';
import { Article } from './article';

describe('RequestArticlesService', () => {
  let service: RequestArticlesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestArticlesService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RequestArticlesService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('request articles', (done: DoneFn) => {
    const testData: any[] = [
      {
        aid: '-1507931247',
        title: 'Hello',
        date: '2020-06-22 16:05:07',
      },
    ];
    // httpClient
    //   .get<Article[]>('https://arendelle.tech/api/get-articles')
    //   .subscribe((data) => expect(data).toEqual(testData));
    service.requestForArticles().subscribe((v) => {
      expect(v).toBeFalsy();
      done();
    });
  });
});
