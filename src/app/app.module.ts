import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{User}from './models/user.model';
import{UserService}from './services/user.services';
import{FormsModule,ReactiveFormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
