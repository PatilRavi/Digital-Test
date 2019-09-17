import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentValue: boolean;

  public display(value: boolean) {
    this.currentValue = value;
    this.status.next(this.currentValue);
  }

}
