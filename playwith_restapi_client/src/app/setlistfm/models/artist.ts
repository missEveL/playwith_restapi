/*
An artist is a musician or a group of musicians. 
Each artist has a definite Musicbrainz Identifier (MBID) with which the artist can be uniquely identified.
https://api.setlist.fm/docs/1.0/json_Artist.html
*/

export class Artist {
  public mbid: string;
  public tbid: string;
  public name: string;
  public sortName: string;
  public disambiguation: string;
  public url: string;
  
    constructor() {
  
    }
  }