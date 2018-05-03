import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { SubscriberComponent } from './subscriber-wrong.component';
// import { SubscriberComponent } from './subscriber-right.component';

@NgModule({
  declarations: [AppComponent, SubscriberComponent],
  entryComponents: [SubscriberComponent],
  imports: [BrowserModule, HttpClientModule, CoreModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
