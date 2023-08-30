import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxchildComponent } from './ngrxchild/ngrxchild.component';
import { NgrxparentComponent } from './ngrxparent/ngrxparent.component';
import { NgrxService } from './ngrx.service';

@NgModule({
  declarations: [
    AppComponent,
    NgrxchildComponent,
    NgrxparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [NgrxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
