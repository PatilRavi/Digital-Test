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
    // it('should be created LoaderService', async(inject([LoaderService], (LoaderService) => {        
    //     spyOn(LoaderService, 'display').and.callFake((args) => console.log(args));
    //     expect(LoaderService.status).toEqual(false);
    // })));

    // it('Should retrieves display flag by calling display()', async(inject([LoaderService], (LoaderService) => {
    //     return LoaderService.display().toPromise().then((result) => {
    //         expect(result.length).toBeGreaterThan(0);
    //     });
    // })));
});
