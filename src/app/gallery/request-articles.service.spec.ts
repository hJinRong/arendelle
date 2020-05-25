import { TestBed } from '@angular/core/testing';

import { RequestArticlesService } from './request-articles.service';

describe('RequestArticlesService', () => {
  let service: RequestArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
