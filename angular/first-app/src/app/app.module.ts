import { UserinfoService } from './userinfo.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalcComponent } from './calc/calc.component';
import { EvenOddComponent } from './even-odd/even-odd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalcComponent,
    EvenOddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
