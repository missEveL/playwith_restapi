
/*
A setlist consists of different (at least one) sets. Sets can either be sets as defined in the Guidelines or encores.
https://api.setlist.fm/docs/1.0/json_Set.html
*/

import { Song } from "./song";

export class Set {
  public name: string;
  public encore: string;
  public song: Song[];
  
    constructor() {
  
    }
  }