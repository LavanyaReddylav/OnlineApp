import { Component, OnInit,Input } from '@angular/core';
import { SearchKeywordService } from '../services/searchkeywords.services';
import {SearchKeyword} from '../models/word.model';


import{Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-searched-image',
  templateUrl: './searched-image.component.html',
  styleUrls: ['./searched-image.component.css']
})

export class SearchedImageComponent implements OnInit {
    searchkeywords:SearchKeyword[];
    constructor(private searchkeywordService:SearchKeywordService) { 
    this.searchkeywords = this.searchkeywordService.getSearchKeywords();
  
  }
  ngOnInit(){
  }
  
}
