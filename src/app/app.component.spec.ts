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

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   fixture.detectChanges();
  //   expect(app).toBeTruthy();
  // }));
  //   it(`should have as title 'hello-world'`, async(() => {
  //     const fixture = TestBed.createComponent(AppComponent);
  //     const app = fixture.debugElement.componentInstance;
  //     expect(app.title).toEqual('hello-world');
  //   }));
  //   it('should render title in a h1 tag', async(() => {
  //     const fixture = TestBed.createComponent(AppComponent);
  //     fixture.detectChanges();
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to hello-world!');
  // }));
});
