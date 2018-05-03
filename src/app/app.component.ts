import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ComponentFactory,
  ViewContainerRef
} from '@angular/core';
import { SubscriberComponent } from './subscriber-wrong.component';
// import { SubscriberComponent } from './subscriber-right.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  componentFactory: ComponentFactory<SubscriberComponent>;
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    this.componentFactory = this.cfr.resolveComponentFactory(
      SubscriberComponent
    );
    this.createComponentWithTimeout(0);
  }
  private createComponentWithTimeout(index: number) {
    // This destroys any previous views / containers.
    this.container.clear();
    // This creates a new view / container.
    this.container.createComponent(this.componentFactory);
    if (index < 10000) {
      // This loops over the process of destroying and creating over and over.
      window.setTimeout(() => {
        this.createComponentWithTimeout(index + 1);
      }, 4);
    }
  }
}
