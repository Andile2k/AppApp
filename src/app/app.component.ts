import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


   showDesktop: boolean =  window.innerWidth < 550 ? true : false;

  
  ngOnInit(): void {
    console.log(this.showDesktop)
  }

}
