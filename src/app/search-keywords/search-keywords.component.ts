import { Component, OnInit } from '@angular/core';
import { SearchKeywordService } from '../services/searchkeywords.services';
import {SearchKeyword} from '../models/word.model';

@Component({
  selector: 'app-search-keywords',
  templateUrl: './search-keywords.component.html',
  styleUrls: ['./search-keywords.component.css']
})
export class SearchKeywordsComponent implements OnInit {
  searchkeywords:SearchKeyword[];
  constructor(private searchkeywordService:SearchKeywordService) { 
    this.searchkeywords = this.searchkeywordService.getSearchKeywords();
  }

ngOnInit(){

}}
