import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/homeservice/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getUsers().subscribe(res=>{
      console.log(res);
    })
  }
}
