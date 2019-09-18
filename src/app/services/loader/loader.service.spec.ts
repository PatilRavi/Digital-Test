import { TestBed, async, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LoaderService]
        })
    })
    it('should be created LoaderService', async() => {
        const service: LoaderService = TestBed.get(LoaderService);
        expect(service).toBeTruthy();
    });
});
