import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDetailService } from '../services/user/user-detail.service';
import { LoaderService } from '../services/loader/loader.service';
import { PostModel } from '../models/post.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private posts: PostModel;
  public selectedId: number;
  public loadMoreFlag = true;
  public errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private usersService: UserDetailService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.loaderService.display(true);
      // tslint:disable-next-line: radix
      this.usersService.getUserPosts(parseInt(params.get('id')))
        .subscribe((post) => {
          this.loadMoreFlag = true;
          this.posts = post;
          this.loaderService.display(false);
        },
          (error) => {
            this.errorMessage = error.message;
            console.log('error', this.errorMessage);
          });
    });
  }

  // for expanding accordion
  public getPosts(event: { target: any; }, index: number): void {
    this.selectedId = index + 1;
    const element = event.target;
    element.parentElement.classList.toggle('active');
    { this.posts[index].isActive ? this.posts[index].isActive = false : this.posts[index].isActive = true; }
  }

  // for loadmore button
  public loadMoreHandler(): void {
    this.loadMoreFlag = false;
  }
}
