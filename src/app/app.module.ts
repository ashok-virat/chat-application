import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import {UserModule} from './user/user.module'
import { LogInComponent } from './user/log-in/log-in.component';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http'
import{ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChatModule,
    BrowserAnimationsModule,
    UserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'login',component:LogInComponent,pathMatch:'full'},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'*',component:LogInComponent},
      {path:'**',component:LogInComponent}
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
