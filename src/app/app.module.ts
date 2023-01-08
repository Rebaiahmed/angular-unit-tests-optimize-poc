import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';

import { PostService } from './shared/post.service';
import { HttpClientModule } from '@angular/common/http';
import { MinutestohourPipe } from './pipes/minutestohour.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    MinutestohourPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
