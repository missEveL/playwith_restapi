import { Component, OnInit } from '@angular/core';
import { NavItem } from '../header/navItem';
import { ApiGiphyService } from './api-giphy.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  navItems = [
    new NavItem('Random GIF', 'randgif'),
    new NavItem('Random Sticker', 'randsticker')
  ];

  tab: string;
  imgURL: string;

  constructor(private giphyService: ApiGiphyService ) {}

  ngOnInit() {
    this.switchTab(this.navItems[0].routerLink);
  }

  switchTab(tab: string) {
    this.tab = tab;
    this.imgURL = '';
    switch (tab) {
      case 'randgif':
          this.giphyService.getRandomGif().subscribe((data) => {
            this.imgURL = data.data.image_url;
          });
          break;
      case 'randsticker':
        this.giphyService.getRandomSticker().subscribe((data) => {
          this.imgURL = data.data.image_url;
        });
        break;
    }
  }

}
