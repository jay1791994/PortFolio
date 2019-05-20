import { Component, OnInit } from '@angular/core';

import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: false, showIndicators: true } }
  ]
})
export class ProjectsComponent implements OnInit {

  iscollapse: boolean = false;
  iscollapse1: boolean = true;
  iscollapse2: boolean = true;


  ngOnInit() {
  }


  onclick() {
    this.iscollapse = false;
    this.iscollapse2 = true;
    this.iscollapse1 = true;
  }

  onclick1() {

    this.iscollapse = true;
    this.iscollapse2 = true;
    this.iscollapse1 = false;

  }

  onclick2() {

    this.iscollapse = true;
    this.iscollapse2 = false;
    this.iscollapse1 = true;

  }
}
