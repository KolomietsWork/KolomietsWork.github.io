import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

	projectName:string[]=['',''];
	projectLink:string[]=['',''];
	
  constructor() { }

  ngOnInit(): void {
	  this.projectName=['Первый проект","Второй проект'];
	  this.projectLink=['https://kolomietswork.github.io/Lab1/","https://kolomietswork.github.io/Lab3/'];
  }

}
