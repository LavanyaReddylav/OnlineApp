import {SearchKeyword} from '../models/word.model';

export class SearchKeywordService{
    searchkeywords:SearchKeyword[];
    constructor(){
        this.searchkeywords = [new SearchKeyword(20,"gods")]; //passing the parameter 
    }
    addSearchKeyword(searchWord:string){
        var keyword:SearchKeyword= new SearchKeyword(this.searchkeywords.length+1,searchWord);
        this.searchkeywords.push(keyword);//iterating the object
    }
    getSearchKeywords(){
        return this.searchkeywords;
    }
}