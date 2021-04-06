/*
A Result consisting of a list of setlists.
https://api.setlist.fm/docs/1.0/json_Setlists.html
 */
import { Setlist } from "./setlist";

export class Setlists {
    public Setlist: Setlist[];
    public total: number;
    public page: number; 
    public itemsPerPage: number;
    constructor() {
    }
  }