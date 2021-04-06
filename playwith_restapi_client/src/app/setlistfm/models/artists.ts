/*
A Result consisting of a list of artists.
https://api.setlist.fm/docs/1.0/json_Artists.html
*/

import { Artist } from "./artist";

export class Artists {
    public artist: Artist[];
    public total: number;
    public page: number;
    public itemsPerPage: number;
    
      constructor() {
    
      }
    }