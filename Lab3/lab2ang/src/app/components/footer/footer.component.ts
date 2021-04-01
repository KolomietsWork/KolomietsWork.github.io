import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myName:string='';
	
  constructor() { }

  ngOnInit(): void {
	  this.myName = 'Коломиец Николай, 2021 ';
  }

}
