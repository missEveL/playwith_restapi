/*
Venues are places where concerts take place. They usually consist of a venue name and a city - but there are also some venues that do not 
have a city attached yet. In such a case, the city simply isn't set and the city and country may (but do not have to) be in the name.
https://api.setlist.fm/docs/1.0/json_Venue.html
*/
import { City } from "./city";

export class Venue {
    public id: string;
    public name: string;
    public city: City;
    public url: string; 
    constructor() {
  
    }
  }