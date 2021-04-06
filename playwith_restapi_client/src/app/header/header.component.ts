import { Component, OnInit } from '@angular/core';
import { NavItem } from './navItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navItems = [
    new NavItem('NASA api', 'nasa'),
    new NavItem('GIPHY api', 'giphy'),
    new NavItem('Setlist.fm api', 'setlistfm')
  ];

  constructor() {
   }

  ngOnInit() {
  }

}
