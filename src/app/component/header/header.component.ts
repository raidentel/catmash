import { Component, OnInit } from '@angular/core';
import {Cat} from '../../model/cat';
import {CatService} from '../../service/cat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private cats: Cat[];
  private catsForVote: Cat[];
  cols: any[];
  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catService.getCatsForVote().then(catsForVote => this.catsForVote = catsForVote);
    this.catService.getCats().then(cats => this.cats = cats);
  }

  voteOnTheCat(cat: any) {
    console.log("reda",cat);
    this.catService.voteOnTheCat(cat).then(catsForVote => this.catsForVote = catsForVote);
    return this.catService.getCats().then(cats => this.cats = cats);
  }


}

  


