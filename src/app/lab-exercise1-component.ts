import { Component, OnInit, Directive, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CountryList } from './country-list';
import { MockCountryList } from './mock-country-list'

@Component({
  selector: 'lab-1',
  templateUrl: './lab-exercise1-component.html',
  styleUrls: ['./lab-exercise1-component.css',]
})

export class LabExercise1 implements OnInit {
  countryList: CountryList[] = [];
  dropDownCountryList: CountryList[] = [];
  message: string;
  dropDownCapital: string;
  error: string;
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
  firstName: string;
  lastName: string;
  fName: string;
  lName: string;
  toggle: boolean;


  constructor() {
    this.firstNumber = "";
    this.secondNumber = "";
    this.thirdNumber = "";
    this.fourthNumber = "";
    this.firstName = "";
    this.lastName = "";
    this.fName = "";
    this.lName = "";
    this.toggle = false;
  }
  searchCountryByIndex(event): void {
    let index = event.target.value.replace(/^[0]+/g, "");
    let arrayLength = this.countryList.length - 1
    if (index != 0) {
      if (index > arrayLength) {
        this.message = 'Index is out of bound!';
        this.error = "error";
      } else {
        this.error = "";
        this.message = 'The Capital of ' + this.countryList[index].name + ' is ' + this.countryList[index].capital;
      }

    }
    else {
      this.message = "";
    }

  }
  onChange(event): void {

    this.dropDownCapital = event.capital;
  }

  initializeData(): void {
    let tempCountryListArray: CountryList[] = [];
    let tempCountryList = MockCountryList;
    let tempDropDownCountryList: CountryList[] = [];
    for (let i = 0; i < tempCountryList.length; i++) {
      let countryList = new CountryList();
      countryList.name = tempCountryList[i].name.toUpperCase();
      countryList.capital = tempCountryList[i].capital.toUpperCase();
      tempCountryListArray.push(countryList);
      if (i != 0) {
        tempDropDownCountryList.push(countryList);
      }

    }
    this.countryList = tempCountryListArray;
    this.dropDownCountryList = tempDropDownCountryList;
  }
  showDiv(value): void {
    if (value == 'Y') {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }
  ngOnInit(): void {
    this.initializeData();
  }


}
