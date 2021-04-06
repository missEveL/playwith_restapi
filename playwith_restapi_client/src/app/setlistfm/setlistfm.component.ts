import { Component } from '@angular/core';
import { ApiSetlistfmService } from './api-setlistfm.service';
import { Artists } from './models/artists';
import { Setlists } from './models/setlists';

@Component({
  selector: 'app-setlistfm',
  templateUrl: './setlistfm.component.html',
  styleUrls: ['./setlistfm.component.css']
})
export class SetlistfmComponent {

  artists: Artists;
  searchArtists: string;
  setlists: Setlists;
  selectedArtist_mbid: string;

  constructor(private setlistfmService: ApiSetlistfmService ) {}

  searchArtist(artistName: string) {
    this.setlistfmService.getArtists(artistName).subscribe((data) => {
      this.artists = data;
     });
  }

  searchSetlist(mbid: string) {
    if(mbid != this.selectedArtist_mbid) {
    this.selectedArtist_mbid = mbid;
    this.setlistfmService.getSetlists(mbid).subscribe((data) => {
      this.setlists = data;
     });
    }
  }

}
