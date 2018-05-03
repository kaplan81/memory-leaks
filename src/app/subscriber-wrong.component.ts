import { Component, OnInit } from '@angular/core';
import { GhibliService } from './core/ghibli.service';

@Component({
  selector: 'app-subscriber',
  template: `
    <ul>
      <li *ngFor="let film of films">{{film.title}}</li>
    </ul>
  `
})
export class SubscriberComponent implements OnInit {
  films: any[];
  constructor(public ghibliService: GhibliService) {}

  ngOnInit() {
    this.ghibliService.getFilms().subscribe(films => {
      this.films = films;
    });
  }
}
