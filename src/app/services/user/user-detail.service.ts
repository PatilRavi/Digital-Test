import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserModel } from '../../models/user.model';
import { PostModel } from '../../models/post.model';
import { CommentModel } from '../../models/comment.model';
import { Constants } from '../../constant/constants'

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(Constants.usersUrl);
  }

  public getUserPosts(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${Constants.userPost}${id}`);
  }

  public getComments(id: number): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${Constants.userComment}${id}`);
  }

}
