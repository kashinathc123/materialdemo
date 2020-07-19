import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-customer-list',
  templateUrl: './customer-list.component.html'
})

export class CustomerListComponent implements OnInit{
  constructor(){}

  ngOnInit(){
  }

  customerList: Array<any> = [
        {"id":100,"name":"test","city":"test","country":"test","zipcode":1213234},
       
      ]
}