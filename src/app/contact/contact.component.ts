import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactform: FormGroup;
   
  constructor() { }

  onsubmit(){
    console.log(this.contactform.value);
    console.log(this.contactform.value);
  }

  ngOnInit() {


    
    this.contactform = new FormGroup({
         name : new FormControl('',[Validators.required]),
         surname :  new FormControl('',[Validators.required]),
         email : new FormControl('',[Validators.required]),
         message : new FormControl('',[Validators.required]),
         phoneNumber: new FormControl('',[Validators.required])
    });
 

  }

}
