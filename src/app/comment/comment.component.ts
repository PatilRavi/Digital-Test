import { Component, Input, OnInit } from '@angular/core';

import { UserDetailService } from '../services/user/user-detail.service';
import { CommentModel } from '../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  usersComments: CommentModel[];
  @Input() commentId: number;

  constructor(
    private usersService: UserDetailService
  ) { }

  public getComments(id: number): void {
    this.usersService.getComments(id)
      .subscribe((comment) => {
        this.usersComments = comment;
      },
      (error) => {
        console.log('error', error.message);
      });
  }

  ngOnInit() {
    this.getComments(this.commentId);
  }

}
