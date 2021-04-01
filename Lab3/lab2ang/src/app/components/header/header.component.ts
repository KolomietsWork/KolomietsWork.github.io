import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	myName:string='';
	
  constructor() { }

  ngOnInit(): void {
	  this.myName = 'Делаем вид, что это резюме';
  }

}
