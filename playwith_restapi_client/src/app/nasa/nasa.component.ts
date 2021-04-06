import { Component, OnInit } from '@angular/core';
import { ApiNasaService } from './api-nasa.service';
import { first, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {
  tab = 'pod';
  title = 'Let\'s see NASA\'s pic of the day!';
  imgURL: string;
  imgCaption: string;
  messages: any[];
  constructor(private nasaService: ApiNasaService ) {}

  ngOnInit() {
    this.switchTab('pod');
  }

  switchTab(tab: string) {
    this.tab = tab;
    this.imgURL = '';
    switch (tab) {
      case 'pod':
          this.nasaService.getPOD().subscribe(
            (data) => {
            this.imgURL = data.url;
            this.imgCaption = data.explanation;
            this.title = data.title;
            });
          break;
      case 'notif':
        this.nasaService.getNOTIF().subscribe((data) => {
          this.messages = data;
        });
        break;
      case 'earth':
        this.nasaService.getEARTH().subscribe((data) => {
          this.imgURL = data.url;
        });
        break;
    }
  }

}
