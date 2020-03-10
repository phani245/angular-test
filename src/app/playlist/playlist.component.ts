import { Component, OnInit } from '@angular/core';
import {Playlist} from '../models/list-model';
import {HttpClient} from '@angular/common/http';

import {ApiService} from '../services/apiservices';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit{
  playlists: Playlist[] = [];
  tempPlayList: Playlist[] = [];
  sortingWithId: string = 'id';
  sortingWithDesc : boolean = false;
  constructor(private httpClient: HttpClient,
    private ListDetails: ApiService) { }

  ngOnInit() {
    this.listDetails();
  }

  listDetails() {
    this.ListDetails.getAll()
    .subscribe(playlists => {
        this.playlists = playlists['results'];
        this.tempPlayList = this.playlists;
      });
  }

  updateFilterByName(event) {
    this.tempPlayList = this.playlists.filter((d) => d.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0)
  }

}
