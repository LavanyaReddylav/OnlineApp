import { Component, OnInit,Input } from '@angular/core';
import {SearchKeyword} from '../models/word.model';
import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-keyword',
  templateUrl: './search-keyword.component.html',
  styleUrls: ['./search-keyword.component.css']
})
export class SearchKeywordComponent implements OnInit {

  @Input() searchkeyword:SearchKeyword;//iterating the object
  constructor(private myRoute:Router) { }

  ngOnInit() {
  }
display(){
  this.myRoute.navigateByUrl('/findImage')
}
}

