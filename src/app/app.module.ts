import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {SearchImageService} from './services/searchImage.services';
import {SearchKeywordService} from './services/searchkeywords.services';
import { AppComponent } from './app.component';
import { FindImageComponent } from './find-image/find-image.component';
import { SearchKeywordComponent } from './search-keyword/search-keyword.component';
import { SearchKeywordsComponent } from './search-keywords/search-keywords.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { SearchedImageComponent } from './searched-image/searched-image.component';
var myRoutes:Routes=[
  {path:'searchkeywords',component:SearchKeywordsComponent,
    children:[{path:'keyword/:word',component:SearchKeywordComponent}]},
  {path:'searchImage',component:SearchImagesComponent},
  {path:'findImage',component:FindImageComponent},
{path:'searchedImage',component:SearchedImageComponent}]


@NgModule({
  declarations: [
    AppComponent,
    FindImageComponent,
    SearchKeywordComponent,
    SearchKeywordsComponent,
    SearchImagesComponent,
    SearchedImageComponent,

  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(myRoutes),
    HttpModule
  ],
  providers: [SearchKeywordService,SearchImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
