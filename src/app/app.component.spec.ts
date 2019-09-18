import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoaderComponent } from './loader/loader.component';

import { LoaderService } from './services/loader/loader.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        UserComponent,
        LoaderComponent
      ],
      providers: [LoaderService]
    }).compileComponents();
  }));
  it('should be created AppComponent', async () => {
    let service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });
});
