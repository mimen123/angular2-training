import { Component, OnInit, Directive, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';



@Component({
  selector: 'lab2',
  templateUrl: './lab-exercise2-component.html',
  styleUrls: ['./lab-exercise2-component.css',]
})

export class LabExercise2 implements OnInit {
  messageEmail: string
  messageFname: string
  messageLname: string
  messagePrivilage: string

  constructor() {
    this.messageEmail = "";
    this.messageFname = "";
    this.messageLname = "";
    this.messagePrivilage = "";
  }
  register(fname, lname, email, privilage): void {

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (email == "") {
      this.messageEmail = "Email is Mandatory";
    }
    else if (email.value.length <= 5 || !EMAIL_REGEXP.test(email.value)) {
      this.messageEmail = "Invalid Email";
    }
    if (fname == "") {
      this.messageFname = "First Name is Mandatory";
    }
    if (lname == "") {
      this.messageLname = "Last Name is Mandatory";
    }
    if (privilage == "") {
      this.messagePrivilage = "Privilage is Mandator";
    }

    if (this.messageEmail != "" && this.messageFname != "" && this.messageLname != "" && this.messagePrivilage != "") {


    }




  }

  ngOnInit(): void {

  }


}
