import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {SearchKeywordService} from '../services/searchkeywords.services';
import {SearchImageService} from '../services/searchImage.services';
import {Iimage} from '../models/Interface.model';
import { forEach } from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {
  searchForm:FormGroup;
  images:Iimage[];
  constructor(private keywordService:SearchKeywordService,
              private searchImageService:SearchImageService,
              private myRoute:Router) {
      this.searchForm=new FormGroup({
        word:new FormControl("",[Validators.required])
      });
      this.images = [];
   }
   get word(){
     return this.searchForm.get('word');
   }
   display(data){
    var imgs=data.hits;
    for (let index = 0; index < imgs.length; index++) {
      this.images[index] = {id:index,url:imgs[index].previewURL}
    }
    this.searchImageService.storeSearchImage(this.images);
    this.myRoute.navigate(['findImage']);
    console.log(imgs);
    console.log(this.images);
   }
   errorDisplay(error){

   }
   searchImage(searchForm:FormGroup){
      if(searchForm.valid){
        this.keywordService.addSearchKeyword(searchForm.value.word);
        return this.searchImageService.getSearchImages(searchForm.value.word)
             .subscribe(data=>this.display(data),
             error=>this.errorDisplay(error))
      }
      //console.log(this.images);
   }
  ngOnInit() {
  }

}
