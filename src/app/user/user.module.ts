import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import{FormsModule} from '@angular/forms'
import{RouterModule,Routes} from '@angular/router' 
import{ToastrModule}from 'ngx-toastr'


@NgModule({
  declarations: [LogInComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'signup',component:SignUpComponent,pathMatch:'full'}
    ])
  ]
})
export class UserModule { }
