import { Component, OnInit } from '@angular/core';
import {SearchImageService} from '../services/searchImage.services';
import {Iimage} from '../models/Interface.model';

@Component({
  selector: 'app-find-image',
  templateUrl: './find-image.component.html',
  styleUrls: ['./find-image.component.css']
})
export class FindImageComponent implements OnInit {

  images:Iimage[];
  constructor(private searchimageservice:SearchImageService) {
    this.images = this.searchimageservice.images;
   }

   ngOnInit() {
  }

}
