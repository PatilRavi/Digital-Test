import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { UserDetailService } from '../services/user/user-detail.service';
import { LoaderService } from '../services/loader/loader.service';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
    let component: CommentComponent;
    let fixture: ComponentFixture<CommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientModule],
            declarations: [CommentComponent],
            providers: [UserDetailService, LoaderService]
        }).compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(CommentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create CommentComponent', () => {
        expect(component).toBeTruthy();
    });
});
