import { TestBed, inject } from '@angular/core/testing';

import { ApiPostserviceService } from './api-postservice.service';

describe('ApiPostserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiPostserviceService]
    });
  });

  it('should be created', inject([ApiPostserviceService], (service: ApiPostserviceService) => {
    expect(service).toBeTruthy();
  }));
});
