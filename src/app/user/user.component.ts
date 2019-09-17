import { Component, OnInit } from '@angular/core';

import { UserDetailService } from '../services/user/user-detail.service';
import { LoaderService } from '../services/loader/loader.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: UserModel[];

  constructor(
    private usersService: UserDetailService,
    private loaderService: LoaderService
  ) {  }

  private getUsers(): void {
    this.loaderService.display(true);
    this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.loaderService.display(false);
      },
        (error) => {
          console.log('error', error.message);
        });
  }

  public menuExpandHandler(bodypanel): void {
    const element = bodypanel;
    element.classList.toggle('active');
  }

  ngOnInit() {
    this.getUsers();
  }

}
