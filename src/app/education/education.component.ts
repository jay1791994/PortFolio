import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
  changecolorblue(){

    var element = document.getElementById("navbar");
    console.log(element);
    element.style.backgroundColor = "navy";


  }
  changecolorgreen(){

    var element = document.getElementById("navbar");
    console.log(element);
    element.style.backgroundColor = "#006000";


  }

}
