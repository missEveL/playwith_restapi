/*
Setlists, that's what it's all about. So if you're trying to use this API without knowing what a setlist is then you're kinda wrong on this page ;-). 
A setlist can be distinguished from other setlists by its unique id. But as setlist.fm works the wiki way, there can be different versions of one 
setlist (each time a user updates a setlist a new version gets created). These different versions have a unique id on its own. So setlists can have 
the same id although they differ as far as the content is concerned - thus the best way to check if two setlists are the same is to compare their versionIds.
https://api.setlist.fm/docs/1.0/json_Setlist.html
*/
import { Artist } from "./artist";
import { Set } from "./set";
import { Venue } from "./venue";

export class Setlist {
    public Artist: Artist;
    public Venue: Venue;
    public Sets: Set; 
    //documentation does not match. instead of array of Set, Set object with array of Song object with array of song
    public info: string;
    public url: string;
    public id: string;
    public versionId: string;
    public eventDate: string;
    constructor() {
  
    }
  }