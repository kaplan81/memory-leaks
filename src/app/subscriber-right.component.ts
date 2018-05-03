import { Component, OnInit, OnDestroy } from '@angular/core';
import { GhibliService } from './core/ghibli.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-subscriber',
  template: `
    <ul>
      <li *ngFor="let film of films">{{film.title}}</li>
    </ul>
  `
})
export class SubscriberComponent implements OnInit, OnDestroy {
  subscription: ISubscription;
  films: any[];
  constructor(public ghibliService: GhibliService) {}

  ngOnInit() {
    this.subscription = this.ghibliService.getFilms().subscribe(films => {
      this.films = films;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
