import { TestBed } from '@angular/core/testing';

import { ToggleService } from './toggle.service';

describe('ToggleService', () => {
  let service: ToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleService],
    });
    service = TestBed.inject(ToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('init', (done: DoneFn) => {
    service.focusOnArticle.subscribe((v) => {
      expect(v).toBeFalse();
      done();
    });
  });

  it('after toggle', (done: DoneFn) => {
    service.toggle();
    service.focusOnArticle.subscribe((v) => {
      expect(v).toBeTrue();
      done();
    });
  });
});
