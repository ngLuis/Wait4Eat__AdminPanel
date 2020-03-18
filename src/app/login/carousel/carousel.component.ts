import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/shared/services/images.service';
import { CarouselImagesJSON } from 'src/app/shared/interfaces/CarouselImagesJSON.interface';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  srcUrl: string = 'assets/img/carousel/1.jpg';
  imgAppear: boolean = true;
  imagesArray: CarouselImagesJSON;
  imageCount: number = 1;

  constructor(
    private imagesService: ImagesService
  ) {}

  ngOnInit() {
    this.imagesService.getImagesFromUrl().subscribe(response => {
      this.imagesArray = response;
      this.changeImg();
    });
  }

  changeImg() {
    setTimeout(() => {
      this.srcUrl = 'assets/img/carousel/';
      this.srcUrl += this.imagesArray.images[this.imageCount];
      if ( this.imageCount === this.imagesArray.images.length - 1 ) {
        this.imageCount = 0;
      } else {
        this.imageCount++;
      }
      this.imgAppear = true;
      this.changeImg();
    }, 5000);
    
    setTimeout( () => {
      this.imgAppear = false;
    }, 4000) 

  }

}
